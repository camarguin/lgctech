'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function TermsOfService() {
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
      title: '1. Agreement to Terms',
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to update and change the Terms of Service from time to time without notice. Your continued use of the website following the posting of revised Terms of Service means that you accept and agree to the changes.`,
    },
    {
      title: '2. Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modifying or copying the materials
      • Using the materials for any commercial purpose or for any public display
      • Attempting to decompile or reverse engineer any software contained on the website
      • Removing any copyright or other proprietary notations from the materials
      • Transferring the materials to another person or "mirroring" the materials on any other server`,
    },
    {
      title: '3. Disclaimer',
      content: `The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
    },
    {
      title: '4. Limitations',
      content: `In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.`,
    },
    {
      title: '5. Accuracy of Materials',
      content: `The materials appearing on our website could include technical, typographical, or photographic errors. Our company does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.`,
    },
    {
      title: '6. Links',
      content: `We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.`,
    },
    {
      title: '7. Modifications',
      content: `We may revise these Terms of Service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.`,
    },
    {
      title: '8. Governing Law',
      content: `These Terms and Conditions are governed by and construed in accordance with the laws of Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
    },
    {
      title: '9. Contact Information',
      content: `If you have any questions about these Terms and Conditions, please contact us through our contact form or via the information provided on our website. We will do our best to respond to your inquiries in a timely manner.`,
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
            Terms of Service
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
            Please read these Terms of Service carefully before accessing or using our website. By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these terms.
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
            Have questions about our Terms of Service?
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
