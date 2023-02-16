import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='' target='blank'><FaFacebookSquare/></a>
        <a href='' target='blank'><FaInstagramSquare/></a>
        <a href='https://github.com/saggarr-work' target='blank'><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials