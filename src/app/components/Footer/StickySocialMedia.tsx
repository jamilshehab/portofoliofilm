import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const StickySocialMedia = () => {
  return (
    <div className="s-soft">
    <Link href="https://www.facebook.com/" className="s-item facebook" target='blank' rel='nofollow'>
    <span><FaFacebook/></span>
    </Link>
    <Link href="https://twitter.com/?lang=en" className="s-item twitter" target='blank' rel='nofollow'>
    <span><FaXTwitter/></span>

    </Link>
    <Link href="https://www.instagram.com/" className="s-item instagram" target='blank' rel='nofollow'>
    <span><FaInstagram/></span>
    </Link>
    <Link  href="https://www.linkedin.com/" className="s-item linkedin" target='blank' rel='nofollow'>
    <span><FaLinkedin/></span>
    </Link>
    
  </div>
  )
}

export default StickySocialMedia
