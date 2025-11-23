'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const sections = [
    {
      title: '1. Introduction',
      content: `We ("our," "us," "we," or the "Company") operate the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      title: '2. Information Collection and Use',
      content: `We collect several different types of information for various purposes to provide and improve our Service to you.

Types of Data Collected:
• Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"), such as: Email address, First name and last name, Phone number, Cookies and Usage Data
• Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data"), such as: Computer's Internet Protocol address, Browser type and version, Pages visited and time spent, Referral source, Device identifiers`,
    },
    {
      title: '3. Use of Data',
      content: `The Company uses the collected data for various purposes:
      
      • To provide and maintain the Service
      • To notify you about changes to our Service
      • To allow you to participate in interactive features of our Service when you choose to do so
      • To provide customer care and support
      • To gather analysis or valuable information so that we can improve the Service
      • To monitor the usage of the Service
      • To detect, prevent and address technical issues`,
    },
    {
      title: '4. Security of Data',
      content: `The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.`,
    },
    {
      title: '5. Contact Forms and Communication',
      content: `When you submit information through our contact form, we collect your name, email address, and message content. This information is used solely to respond to your inquiry. We will not share this information with third parties without your consent, except as required by law.`,
    },
    {
      title: '6. Links to Other Sites',
      content: `Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.`,
    },
    {
      title: '7. Children\'s Privacy',
      content: `Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately.

If we discover that a child under 18 has provided us with Personal Data, we will delete such information and terminate the child's account immediately.`,
    },
    {
      title: '8. Changes to This Privacy Policy',
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`,
    },
    {
      title: '9. Contact Us',
      content: `If you have any questions about this Privacy Policy, please contact us through our contact form on the website. We will respond to your inquiry as soon as possible.`,
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1E3F] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-[#2E5090] dark:text-[#F5F6FA] hover:text-[#0B1E3F] dark:hover:text-[#F5F6FA] transition-colors group">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] dark:from-[#F5F6FA] dark:via-[#2E5090] dark:to-[#F5F6FA] bg-clip-text text-transparent mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-600 dark:text-[#F5F6FA]/70 mb-4"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base text-zinc-600 dark:text-[#F5F6FA]/60"
          >
            This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and use our services.
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#1a2f52] p-8 rounded-2xl border border-[#2E5090]/20 dark:border-[#F5F6FA]/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-[#0B1E3F] dark:text-[#F5F6FA] mb-4">
                {section.title}
              </h2>
              <p className="text-zinc-600 dark:text-[#F5F6FA]/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 p-8 bg-linear-to-r from-[#0B1E3F]/10 to-[#2E5090]/10 dark:from-[#F5F6FA]/5 dark:to-[#F5F6FA]/5 rounded-2xl border border-[#2E5090]/20 dark:border-[#F5F6FA]/10 text-center"
        >
          <p className="text-zinc-600 dark:text-[#F5F6FA]/70 mb-4">
            Have concerns about your privacy or data?
          </p>
          <Link href="/#contact" className="inline-block">
            <button className="group relative bg-[#0B1E3F] dark:bg-[#F5F6FA] text-white dark:text-[#0B1E3F] px-8 py-3 rounded-full text-base font-medium shadow-md hover:shadow-[0_10px_25px_rgba(11,30,63,0.3)] dark:hover:shadow-[0_10px_25px_rgba(245,246,250,0.2)] transition-all duration-300 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-r from-[#2E5090]/10 to-[#0B1E3F]/10 rounded-full blur-3xl -z-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-r from-[#0B1E3F]/10 to-[#2E5090]/10 rounded-full blur-3xl -z-20" />
      </div>
    </main>
  )
}
