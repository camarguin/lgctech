import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter for iCloud email
// Supports both iCloud and other email providers
const getTransporter = () => {
  const emailProvider = process.env.EMAIL_PROVIDER || 'gmail'
  
  console.log('Email Provider:', emailProvider)
  console.log('Gmail User:', process.env.GMAIL_USER ? 'configured' : 'NOT configured')
  console.log('Gmail Password:', process.env.GMAIL_APP_PASSWORD ? 'configured' : 'NOT configured')
  
  if (emailProvider === 'icloud') {
    if (!process.env.ICLOUD_EMAIL || !process.env.ICLOUD_APP_PASSWORD) {
      throw new Error('iCloud email credentials not configured')
    }
    return nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false, // TLS, not SSL
      auth: {
        user: process.env.ICLOUD_EMAIL,
        pass: process.env.ICLOUD_APP_PASSWORD, // App-specific password
      },
    })
  } else if (emailProvider === 'gmail') {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Gmail credentials not configured')
    }
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  }
  
  throw new Error(`No valid email provider configured. Provider: ${emailProvider}`)
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Development mode - just log the message
    if (process.env.DEV_MODE === 'true') {
      console.log('📧 Contact Form Submission (DEV MODE):')
      console.log('Name:', name)
      console.log('Email:', email)
      console.log('Message:', message)
      return NextResponse.json(
        { success: true, message: 'Message logged (dev mode)' },
        { status: 200 }
      )
    }

    // Get transporter (lazy initialization)
    const transporter = getTransporter()
    
    // Send email to yourself
    const senderEmail = process.env.GMAIL_USER || process.env.ICLOUD_EMAIL
    
    if (!senderEmail) {
      throw new Error('No sender email configured')
    }
    
    await transporter.sendMail({
      from: senderEmail,
      to: senderEmail,
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>New message from your portfolio!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: senderEmail,
      to: email,
      subject: 'Message Received - Lucas Gerhardt de Camargo',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Lucas Gerhardt de Camargo</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Email error:', errorMessage, error)
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    )
  }
}
