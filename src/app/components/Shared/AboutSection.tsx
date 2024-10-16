"use client";
import Image from 'next/image'
import React from 'react'
import FadeInLeftAnimation from '../Animations/FadeInLeftAnimation'
import FadeInUpAnimation from '../Animations/FadeInUpAnimation';
const AboutSection:React.FC = () => {
  return (
    <section className='relative  py-16 bg-gray-50 dark:bg-slate-800' id="about">
       <div className="container relative  ">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-6 md:order-2 order-1">
              <FadeInLeftAnimation>
              <Image src="/assets/images/about/1.jpg" width={500} height={500}  alt="" className='rounded-lg'/>  

              </FadeInLeftAnimation>

    
             </div>
            <div className="lg:col-span-6 md:order-1 order-2">
              <FadeInUpAnimation>
              <div className="lg:me-10">
         <h2 className="mb-6 md:text-3xl text-4xl md:leading-normal leading-normal">Passionate Filmmaker  <br/> Crafting Unique Visual Stories</h2>
              <p className="text-slate-800 max-w-xl text-justify"> As a dedicated freelance filmmaker, I specialize in bringing creative visions to life through compelling and cinematic storytelling. With a keen eye for detail and a passion for visual aesthetics, I have worked on a variety of projects, from short films and documentaries to promotional videos and music clips. Every project is an opportunity to collaborate and push creative boundaries, ensuring that each story resonates with its audience. Whether you’re looking to capture raw emotion or showcase a product with stunning visuals, my goal is to deliver a seamless and impactful experience that leaves a lasting impression.</p>
        </div>
              </FadeInUpAnimation>
           
           
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection
