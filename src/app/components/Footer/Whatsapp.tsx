import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <Link href="#" className="whatsapp flex justify-center items-center " target="_blank">
    <span className='flex justify-center items-center '><FaWhatsapp  className="my-float text-4xl  "/></span>
   </Link>
  )
}

export default Whatsapp
