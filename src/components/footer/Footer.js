import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'><span id='first'>Avijit Biswas</span><span id='second'> (sagar)</span></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='' target="blank"><FaFacebookF/></a>
        <a href='' target="blank"><FaInstagram/></a>
        <a href='' target="blank"><FaTelegramPlane/></a>
      </div>

      {/* autometic copyright date genarator */}
      <div className='footer__copyright'>
        <small>&copy; Avijit Biswas (sagar). All rights reserved. 2022 - {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer