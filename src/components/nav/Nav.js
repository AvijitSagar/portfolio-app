import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsJournalBookmark} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmark/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav