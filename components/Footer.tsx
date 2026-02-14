'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#1F2937] text-white py-12 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Footer Content */}
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <Image
                src='/WhiteLogo.svg'
                alt='LGC Logo'
                width={52}
                height={52}
                style={{ height: 'auto' }}
              />
              <h3 className='text-2xl font-bold'>
                <span className='text-white'>{t.footer.brand}</span>
              </h3>
            </div>
            <p className='text-white/70'>{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold mb-4 text-white'>{t.footer.quickLinks}</h4>
            <ul className='space-y-2 text-white/70'>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors'
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='hover:text-white transition-colors'
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='hover:text-white transition-colors'
                >
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:text-white transition-colors'
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-semibold mb-4 text-white'>{t.footer.servicesSection}</h4>
            <ul className='space-y-2 text-white/70'>
              <li>{t.services.webDesign}</li>
              <li>{t.services.mobileApp}</li>
              <li>{t.services.uiUx}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center text-white/70 text-sm'>
            <p>
              &copy; {currentYear} {t.footer.rights}
            </p>
            <div className='flex gap-6 mt-4 md:mt-0'>
              {/* <Link
                href='/terms'
                className='hover:text-white transition-colors'
              >
                {t.footer.terms}
              </Link>
              <Link
                href='/privacy'
                className='hover:text-white transition-colors'
              >
                {t.footer.privacy}
              </Link> */}
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className='hover:text-white transition-colors cursor-pointer text-left'
              >
                {t.footer.contactInfo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
