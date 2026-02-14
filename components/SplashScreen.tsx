'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className='fixed inset-0 z-50 bg-[#0B1E3F] flex items-center justify-center animate-fade-out'>
      <div className='flex flex-col items-center justify-center gap-6 animate-bounce-slow'>
        <Image
          src='/LGCLogo.svg'
          alt='LGC Logo'
          width={120}
          height={120}
          className='animate-pulse'
          priority
          loading='eager'
        />
        <div className='h-1 w-24 bg-linear-to-r from-[#2E5090] to-[#F5F6FA] rounded-full animate-pulse'></div>
      </div>
    </div>
  )
}
