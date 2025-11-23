'use client';

import React, { Fragment } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
]

export default function QualityTape() {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <style>{`
        @keyframes tape-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .tape-scroll {
          animation: tape-move 25s linear infinite;
        }
      `}</style>
      <div className='bg-linear-to-r from-[#0B1E3F] via-[#2E5090] to-[#0B1E3F] -rotate-3 -mx-1'>
        <div className='flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 pr-4 py-3 tape-scroll'>
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div
                    key={word}
                    className='inline-flex gap-4 items-center whitespace-nowrap'
                  >
                    <span className='text-[#F5F6FA] uppercase font-extrabold text-sm'>
                      {word}
                    </span>
                    <FaCheckCircle className='size-6 text-[#F5F6FA]' />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
