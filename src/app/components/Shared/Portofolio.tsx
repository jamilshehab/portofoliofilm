"use client";
import React from 'react'
import PortofolioComponent from './PortofolioComponent/PortofolioComponent'
import FadeInUpAnimation from '../Animations/FadeInUpAnimation'
import FadeInDownAnimation from '../Animations/FadeInDown'

const Portofolio = () => {
  return (
    <section className=" relative  py-16 bg-slate-100" id="portfolio">
        <div className='container'>
        <div className="grid grid-cols-1 pb-8 text-center">
          <FadeInUpAnimation>
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Portfolio</h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Works & Projects</h3>
          </FadeInUpAnimation>
              <FadeInUpAnimation>
              <p className="text-slate-400 max-w-xl mx-auto">Obviously I am a Film Maker. Experienced with all stages of the development cycle for dynamic web projects.</p>

              </FadeInUpAnimation>

            </div>
            <FadeInDownAnimation>
            <PortofolioComponent/>

            </FadeInDownAnimation>
        </div>
          
        </section>
  )
}

export default Portofolio
