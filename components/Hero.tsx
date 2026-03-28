'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { FiDownload } from 'react-icons/fi'

export default function Hero() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1 },
    }),
  }

  return (
    <section className='pt-32 pb-20 px-6'>
      <motion.div
        className='max-w-4xl mx-auto text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Profile Image */}
        <motion.div custom={0} variants={itemVariants} className='mb-8 flex justify-center'>
          <Image
            src='/aboutPicture.png'
            alt='Lucas Gerhardt de Camargo'
            width={200}
            height={200}
            className='rounded-full object-cover object-top border-4 border-[#0B1E3F] dark:border-[#F5F6FA]'
            priority
            quality={100}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div custom={1} variants={itemVariants} className='mb-8'>
          <h2 className='text-sm text-zinc-600 dark:text-zinc-400 mb-4'>
            {t.hero.greeting}
          </h2>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-[#F5F6FA] mb-6'>
            {t.hero.title}
            <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-[#0B1E3F] to-[#2E5090]'>
              {t.hero.subtitle}
            </span>
          </h1>
          <p className='text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8'>
            {t.hero.description}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div custom={2} variants={itemVariants} className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center sm:items-start'>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className='group relative bg-[#0B1E3F] dark:bg-[#F5F6FA] text-white dark:text-[#0B1E3F] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-[0_10px_25px_rgba(11,30,63,0.3)] dark:hover:shadow-[0_10px_25px_rgba(245,246,250,0.2)] transition-all duration-300 cursor-pointer'>
            {t.hero.contactBtn}
          </motion.button>
          <motion.a
            href="https://drive.google.com/file/d/18gjNukTujzX2odIA1fl1Y80to--OzP5L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group relative px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full overflow-hidden border-2 border-[#0B1E3F] dark:border-[#F5F6FA] text-[#0B1E3F] dark:text-[#F5F6FA] shadow-md hover:shadow-[0_10px_25px_rgba(46,80,144,0.2)] dark:hover:shadow-[0_10px_25px_rgba(245,246,250,0.1)] transition-all duration-300 cursor-pointer flex items-center gap-2 justify-center'>
            <div className="absolute inset-0 bg-[#0B1E3F]/5 dark:bg-[#F5F6FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className='relative flex items-center gap-2'>
              {t.hero.resumeBtn}
              <FiDownload className='text-lg' />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
