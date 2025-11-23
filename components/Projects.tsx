'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/context/LanguageContext'
import { PROJECTS } from '@/constants'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function Projects() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Map project IDs to description keys
  const getProjectDescription = (projectId: string) => {
    const descriptionMap: Record<string, keyof typeof t.projects.descriptions> = {
      'mysquad': 'mysquad',
      'travel-taiwan': 'travel-taiwan',
      'travel-vancouver': 'travel-vancouver',
      'combatly': 'combatly',
      'yuanway-teashop': 'yuanway',
      'perfilagro': 'perfilagro',
      'stradalocadora': 'stradalocadora',
      'reporembalagens': 'reporembalagens',
    }
    const key = descriptionMap[projectId]
    return key ? t.projects.descriptions[key] : ''
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  }

  // Color schemes matching your design
  const colorSchemes = [
    {
      gradient: 'from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F]',
      accent: 'from-[#2E5090] to-[#F5F6FA]',
      glowColor: '#2E5090',
    },
    {
      gradient: 'from-[#2E5090] via-[#0B1E3F] to-[#2E5090]',
      accent: 'from-[#F5F6FA] to-[#2E5090]',
      glowColor: '#2E5090',
    },
    {
      gradient: 'from-[#0B1E3F] via-[#2E5090] to-[#F5F6FA]',
      accent: 'from-[#2E5090] to-[#F5F6FA]',
      glowColor: '#2E5090',
    },
  ]

  return (
    <section
      id='projects'
      className='py-20 px-6 bg-white dark:bg-[#0B1E3F] relative overflow-hidden'
    >
      <div
        className='max-w-6xl mx-auto'
        ref={ref}
      >
        {/* Section Title */}
        <motion.div
          className='text-center mb-20'
          variants={itemVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <p className='text-sm text-zinc-600 dark:text-[#F5F6FA]/70 mb-2 font-medium uppercase tracking-widest'>
            {t.projects.section}
          </p>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] dark:from-[#F5F6FA] dark:via-[#2E5090] dark:to-[#F5F6FA] bg-clip-text text-transparent mb-4'>
            {t.projects.title}
          </h2>
          <p className='text-lg text-zinc-600 dark:text-[#F5F6FA]/70 max-w-2xl mx-auto'>
            Showcase of vibrant, high-impact projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={itemVariants}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className='group relative h-full cursor-pointer'
            >
              {/* Glow effect background - pre-rendered for performance */}
              <div
                className='absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl'
                style={{
                  background: `radial-gradient(circle, ${
                    colorSchemes[index % 3].glowColor
                  }40 0%, transparent 70%)`,
                }}
              />

              {/* Card Container */}
              <div className='relative h-full bg-white dark:bg-[#1a2f52] rounded-3xl overflow-hidden border-2 border-[#2E5090]/20 dark:border-[#F5F6FA]/10 shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(46,80,144,0.25)] hover:border-[#2E5090]/40 dark:hover:border-[#F5F6FA]/20'>
                {/* Project Image/Visual Section */}
                <div
                  className={`relative w-full h-64 bg-linear-to-br ${
                    colorSchemes[index % 3].gradient
                  } overflow-hidden`}
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      {/* Gradient overlay */}
                      <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-50 group-hover:opacity-30 transition-opacity' />
                    </>
                  ) : (
                    <>
                      {/* Animated gradient overlay */}
                      <div className='absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity'>
                        <div
                          className={`absolute inset-0 bg-linear-to-t from-black/40 to-transparent`}
                        />
                      </div>

                      {/* Floating elements for visual interest */}
                      <motion.div
                        className='absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20'
                        animate={{ y: [0, -10, 0], rotate: [0, 90, 180] }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                      <motion.div
                        className='absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10 backdrop-blur-md'
                        animate={{ y: [0, 15, 0], rotate: [0, -90, -180] }}
                        transition={{ duration: 10, repeat: Infinity }}
                      />

                      {/* Project Icon/Emoji */}
                      <div className='absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500'>
                        <span className='text-7xl drop-shadow-lg'>
                          {['🚀', '💎', '⚡'][index % 3]}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Project Info Section */}
                <div className='p-8 relative z-10'>
                  {/* Title with gradient accent */}
                  <div className='mb-4'>
                    <div
                      className={`h-1 w-12 bg-linear-to-r ${
                        colorSchemes[index % 3].accent
                      } rounded-full mb-4 group-hover:w-full transition-all duration-500`}
                    />
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-[#F5F6FA] group-hover:text-[#2E5090] dark:group-hover:text-[#F5F6FA] transition-colors duration-300 mb-3'>
                      {project.title}
                    </h3>
                  </div>

                  <p className='text-gray-600 dark:text-[#F5F6FA]/70 mb-6 leading-relaxed text-sm group-hover:text-gray-900 dark:group-hover:text-[#F5F6FA] transition-colors'>
                    {getProjectDescription(project.id)}
                  </p>

                  {/* Tags with vibrant styling */}
                  {project.tags && (
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className='text-xs font-semibold px-3 py-1.5 rounded-full border border-[#2E5090] text-[#2E5090] dark:border-[#F5F6FA]/30 dark:text-[#F5F6FA] bg-[#2E5090]/5 dark:bg-[#F5F6FA]/5 backdrop-blur-sm'
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* CTA Link */}
                  {project.type === 'design' && project.designImages ? (
                    <motion.button
                      onClick={() => {
                        setSelectedGallery(project.id)
                        setCurrentImageIndex(0)
                      }}
                      whileHover={{ x: 4 }}
                      className={`inline-flex items-center gap-2 font-semibold text-sm text-[#2E5090] dark:text-[#F5F6FA] hover:text-[#0B1E3F] dark:hover:text-[#F5F6FA]`}
                    >
                      View Design
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  ) : project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className={`inline-flex items-center gap-2 font-semibold text-sm text-[#2E5090] dark:text-[#F5F6FA] hover:text-[#0B1E3F] dark:hover:text-[#F5F6FA]`}
                    >
                      {t.projects.viewCase}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className='text-center mt-20'
          variants={itemVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
        >
          <motion.a
            href="https://www.instagram.com/lucasgcoder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group relative px-10 py-4 font-bold text-lg rounded-full overflow-hidden border-2 border-[#2E5090] text-[#2E5090] dark:border-[#F5F6FA] dark:text-[#F5F6FA] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(46,80,144,0.3)] dark:hover:shadow-[0_10px_30px_rgba(245,246,250,0.1)] cursor-pointer inline-flex items-center'
          >
            {/* Animated gradient background */}
            <div className='absolute inset-0 bg-linear-to-r from-[#2E5090]/10 to-[#0B1E3F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full' />

            <span className='relative text-[#2E5090] dark:text-[#F5F6FA] flex items-center gap-2 group-hover:text-[#0B1E3F] dark:group-hover:text-[#F5F6FA] transition-colors'>
              {t.projects.seeMore}
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-linear-to-r from-[#2E5090]/10 to-[#0B1E3F]/10 rounded-full blur-3xl -z-20' />
      <div className='absolute bottom-0 right-10 w-96 h-96 bg-linear-to-r from-[#0B1E3F]/10 to-[#2E5090]/10 rounded-full blur-3xl -z-20' />

      {/* Design Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='relative bg-white dark:bg-[#1a2f52] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col'
            >
              {/* Header */}
              <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-[#2E5090]'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-[#F5F6FA]'>
                  {PROJECTS.find((p) => p.id === selectedGallery)?.title}
                </h3>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className='p-2 hover:bg-gray-100 dark:hover:bg-[#2E5090] rounded-lg transition-colors'
                >
                  <FiX size={24} className='text-gray-900 dark:text-[#F5F6FA]' />
                </button>
              </div>

              {/* Gallery Content */}
              <div className='flex-1 overflow-auto p-6'>
                {PROJECTS.find((p) => p.id === selectedGallery)?.designImages && (
                  <div className='flex flex-col gap-6'>
                    {PROJECTS.find((p) => p.id === selectedGallery)?.designImages?.map(
                      (image, idx) => (
                        <div key={idx} className='relative w-full h-auto rounded-lg overflow-hidden'>
                          <Image
                            src={image}
                            alt={`Design ${idx + 1}`}
                            width={800}
                            height={600}
                            className='w-full h-auto object-cover'
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className='border-t border-gray-200 dark:border-[#2E5090] p-4 flex justify-between'>
                <span className='text-sm text-gray-600 dark:text-[#F5F6FA]/70'>
                  Design Showcase
                </span>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className='px-6 py-2 bg-[#2E5090] text-white rounded-lg hover:bg-[#0B1E3F] transition-colors'
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
