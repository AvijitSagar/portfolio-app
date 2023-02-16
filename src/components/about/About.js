import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About_Image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>30+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>

          <p>
          I'm a software engineer. I specialize in HTML, CSS, JS, PHP and have worked extensively with React Library and Laravel Faramework.

          As a software engineer, I pride myself on my ability to think critically and solve complex problems. I'm a quick learner and enjoy staying up to date with the latest technologies and best practices. I thrive in collaborative environments and am committed to delivering high-quality solutions that meet the needs of my clients.

          I'm passionate about software engineering because I believe it has the power to transform the world. I'm motivated by the challenge of creating innovative solutions that solve real-world problems and improve people's lives.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about