import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Linkedin = () => {
  return (
    <Link href="#" className="linkedin flex justify-center items-center " target="_blank">
    <span className='flex justify-center items-center '><FaLinkedin  className="my-float text-4xl  "/></span>
   </Link>
  )
}

export default Linkedin
