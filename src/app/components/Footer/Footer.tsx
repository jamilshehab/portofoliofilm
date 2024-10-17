import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-secondary">
    <div className="mx-auto max-w-screen-xl  ">
    <div className="border-t border-gray-100 py-8 sm:flex sm:items-center  sm:justify-between">
    <div className='flex flex-wrap justify-center gap-4 text-xs lg:justify-end'>
        <div className='img md:w-1/4'>
        <Image src="/assets/images/logo/1.png" width={143} height={26} alt="Logo 1" />

        </div>
        <div className='img md:w-1/2 items-end'>
        <div className='content  '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis tenetur aliquam id fuga excepturi, eaque in dolores aperiam, neque, pariatur sed quod suscipit enim cupiditate perferendis debitis numquam eum!</p>
        </div>
        </div>
    </div>

     
</div>
    
  
      <div className="mt-16 border-t border-gray-300 py-8 sm:flex sm:items-center sm:justify-center  ">
        <ul className="flex flex-wrap !justify-center gap-4     ">
         <li className=''><p className='text-md text-center'>© 2024 MovieMaker. | Developed by <Link href='#' className='font-bold duration-75 hover:text-indigo-500'>Jamil Shehab</Link></p></li>
  
        </ul>
   
        
      </div>
    </div>
  </footer>
  )
}

export default Footer
