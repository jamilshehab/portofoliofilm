"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { serviceItems } from '@/app/data/data';
import Image from 'next/image';
import FadeInUpAnimation from '../Animations/FadeInUpAnimation';

const Services = () => {
  return (
    <section className="relative  py-16 " id="services">
    

    <div className="container relative  ">
        <div className="grid grid-cols-1 pb-8 text-center">
            <FadeInUpAnimation>
            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What do i offer ?</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Obviously I am a Film Makedr. Experienced with all stages of the video editing cycle for films or any video projects.</p>
            </FadeInUpAnimation>
           
        </div>
        <div className='swipr-wrapper relative'>
        <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {serviceItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
          <div className='relative w-full h-full overflow-hidden'>
    <Image 
      src={item.img} 
      width={348} 
      height={348} 
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} // optional
      objectFit="cover" // Ensures the image covers the container
      className="transform transition-transform duration-300 hover:scale-110 hover:grayscale" 
      alt={item.title}
    />
  </div>
            <div className="content mt-7">
              <h3 className="title h5 text-lg font-medium">{item.title}</h3>
              <p className="text-slate-400 mt-3">{item.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
        <div className="swiper-pagination-bullet-3  items-center  my-10   flex justify-center  "></div>

        </div>
 
    </div>
</section>
  )
}

export default Services
