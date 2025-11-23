'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaGithub,
  FaDiscord,
  FaWhatsapp,
  FaBehance,
  FaFigma,
  FaCode,
  FaBriefcase,
  FaAward,
  FaInstagram,
} from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'
import { SOCIAL_LINKS } from '@/constants'

const iconMap = {
  github: FaGithub,
  discord: FaDiscord,
  behance: FaBehance,
  figma: FaFigma,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function About() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id='about'
      className='py-20 px-6 bg-zinc-50 dark:bg-[#0B1E3F]'
    >
      <div
        className='max-w-6xl mx-auto'
        ref={ref}
      >
        <motion.div
          className='text-center mb-16'
          variants={itemVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70 mb-2 font-medium uppercase tracking-widest'>
            {t.about.section}
          </p>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] dark:from-[#F5F6FA] dark:via-[#2E5090] dark:to-[#F5F6FA] bg-clip-text text-transparent mb-4'>
            {t.about.title}
          </h2>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-3 gap-12 items-center mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className='md:col-span-1 flex justify-center'
          >
            <div className='relative w-64 h-80'>
              {/* Decorative border */}
              <div className='absolute inset-0 rounded-2xl bg-linear-to-b from-[#0B1E3F] to-[#2E5090] p-1'>
                <Image
                  src='/aboutPicture.jpg'
                  alt='Lucas Gerhardt de Camargo'
                  width={520}
                  height={640}
                  className='w-full h-full object-cover object-top rounded-2xl'
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='md:col-span-2'
          >
            <p className='text-lg text-zinc-700 dark:text-[#F5F6FA] mb-8 leading-relaxed'>
              {t.about.bio}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              <motion.div
                className='group relative'
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Glow effect background */}
                <div
                  className='absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl'
                  style={{
                    background:
                      'radial-gradient(circle, rgba(46,80,144,0.4) 0%, transparent 70%)',
                  }}
                />
                <div className='relative h-full bg-white dark:bg-[#1a2f52] border-2 border-[#2E5090]/20 dark:border-[#F5F6FA]/10 rounded-2xl p-6 shadow-md hover:shadow-[0_12px_30px_rgba(46,80,144,0.2)] dark:hover:shadow-[0_12px_30px_rgba(245,246,250,0.1)] hover:border-[#2E5090]/40 dark:hover:border-[#F5F6FA]/20 transition-all duration-300'>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaCode className='text-lg text-[#2E5090] dark:text-[#F5F6FA] group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='font-semibold text-black dark:text-[#F5F6FA] group-hover:scale-105 origin-left transition-transform duration-300'>
                      {t.about.languages}
                    </h3>
                  </div>
                  <ul className='space-y-2'>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      JavaScript
                    </li>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      TypeScript
                    </li>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      HTML/CSS
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className='group relative'
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Glow effect background */}
                <div
                  className='absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl'
                  style={{
                    background:
                      'radial-gradient(circle, rgba(46,80,144,0.4) 0%, transparent 70%)',
                  }}
                />
                <div className='relative h-full bg-white dark:bg-[#1a2f52] border-2 border-[#2E5090]/20 dark:border-[#F5F6FA]/10 rounded-2xl p-6 shadow-md hover:shadow-[0_12px_30px_rgba(46,80,144,0.2)] dark:hover:shadow-[0_12px_30px_rgba(245,246,250,0.1)] hover:border-[#2E5090]/40 dark:hover:border-[#F5F6FA]/20 transition-all duration-300'>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaAward className='text-lg text-[#2E5090] dark:text-[#F5F6FA] group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='font-semibold text-black dark:text-[#F5F6FA] group-hover:scale-105 origin-left transition-transform duration-300'>
                      {t.about.experience}
                    </h3>
                  </div>
                  <ul className='space-y-2'>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      5+ years
                    </li>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      Frontend
                    </li>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      Full Stack
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className='group relative'
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Glow effect background */}
                <div
                  className='absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl'
                  style={{
                    background:
                      'radial-gradient(circle, rgba(46,80,144,0.4) 0%, transparent 70%)',
                  }}
                />
                <div className='relative h-full bg-white dark:bg-[#1a2f52] border-2 border-[#2E5090]/20 dark:border-[#F5F6FA]/10 rounded-2xl p-6 shadow-md hover:shadow-[0_12px_30px_rgba(46,80,144,0.2)] dark:hover:shadow-[0_12px_30px_rgba(245,246,250,0.1)] hover:border-[#2E5090]/40 dark:hover:border-[#F5F6FA]/20 transition-all duration-300'>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaBriefcase className='text-lg text-[#2E5090] dark:text-[#F5F6FA] group-hover:scale-110 transition-transform duration-300' />
                    <h3 className='font-semibold text-black dark:text-[#F5F6FA] group-hover:scale-105 origin-left transition-transform duration-300'>
                      {t.about.projects}
                    </h3>
                  </div>
                  <ul className='space-y-2'>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      20+ Projects
                    </li>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      Web Apps
                    </li>
                    <li className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70'>
                      Designs
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='border-t border-zinc-200 dark:border-[#2E5090] pt-12'
          variants={itemVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className='text-center text-sm text-zinc-600 dark:text-[#F5F6FA] mb-8'>
            {t.about.connectWith}
          </p>
          <div className='flex justify-center gap-6'>
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full bg-[#0B1E3F] hover:bg-[#2E5090] text-[#F5F6FA] flex items-center justify-center transition-colors hover:scale-110 duration-300'
                  title={link.name}
                >
                  {Icon && <Icon size={20} />}
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
