import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter for iCloud email
// Supports both iCloud and other email providers
const getTransporter = () => {
  const emailProvider = process.env.EMAIL_PROVIDER || 'icloud'
  
  if (emailProvider === 'icloud') {
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
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  }
  
  throw new Error('No valid email provider configured')
}

const transporter = getTransporter()

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

    // Send email to yourself
    const senderEmail = process.env.ICLOUD_EMAIL || process.env.GMAIL_USER
    
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
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
