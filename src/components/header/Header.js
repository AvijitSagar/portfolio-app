import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <span id='first'>Avijit Biswas</span><span id='second'> (sagar)</span>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header