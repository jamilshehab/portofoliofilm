"use client";
import React from 'react'
import Link from 'next/link'
import FadeInLeftAnimation from '../Animations/FadeInLeftAnimation'
const HomeBanner = () => {
  return (
   <div className='main'>
     <section className="relative md:pt-60 pt-40 md:pb-64 pb-56 flex items-center bg-center bg-no-repeat bg-cover jarallax bg-fixed" style={{backgroundImage:"url('/assets/images/HomeBanner/1.jpg')"}}  id="home">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="md:flex justify-center mt-10">
                    <div className="w-full">
                     
                      <FadeInLeftAnimation>
                      <h2 className="font-bold text-white leading-snug text-[30px] lg:text-[42px] mt-6 block">Edited with Precision <br /> Alpha Video Showcase</h2>

                      </FadeInLeftAnimation>
                          <FadeInLeftAnimation>
                          <div className="mt-8">
                            <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Me  </Link>
                        </div>
                          </FadeInLeftAnimation>
                        
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
   </div>

  )
}

export default HomeBanner
