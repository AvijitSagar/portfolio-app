import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
            <h3>FrontEnd</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Website Design:</b> I provide website design services that prioritize user experience and create a visually appealing interface that captures the brand's essence. I strive to create designs that align with your brand's values and mission.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>HTML, CSS, and JavaScript Development:</b> I utilize HTML, CSS, and JavaScript to create high-quality front-end user interfaces that work well on any device. I pay attention to details, such as responsive design, typography, and accessibility, to ensure that the user interface is user-friendly, and easy to use.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Frontend Frameworks and Libraries:</b> I utilize popular frontend frameworks and libraries such as React, Vue.js, and Angular to create responsive and dynamic user interfaces that are robust, performant, and scalable. This also enables me to streamline the development process and deliver high-quality solutions in a timely manner.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Cross-Browser Compatibility:</b> I ensure that websites and web applications I develop are compatible with all major browsers and devices, ensuring a seamless user experience for all visitors. This helps improve your website's search engine ranking and increases your website's overall reach.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Performance Optimization:</b> I focus on creating websites and web applications that are optimized for fast load times, and low page size. I make use of best practices such as code minification, image optimization, and caching to improve the website's overall performance.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Accessibility:</b> I create accessible user interfaces that cater to users with disabilities. This includes the use of semantic HTML, ARIA tags, and ensuring compliance with the Web Content Accessibility Guidelines (WCAG).</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}

        <article className='service'>
          <div className='service__head'>
            <h3>BackEnd</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>API Development:</b> I specialize in developing robust and scalable RESTful APIs that can be used to power a wide range of web and mobile applications. I make use of popular frameworks such as Node.js, Django, and Ruby on Rails to create APIs that are easy to use and integrate.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Database Design and Management:</b> I am experienced in designing and managing databases that can handle large amounts of data while ensuring data integrity and security. I work with popular databases such as MySQL, PostgreSQL, and MongoDB to design data models and implement data access patterns that are efficient and scalable.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Server-Side Frameworks:</b> I work with popular server-side frameworks such as Laravel, Express.js, and Flask to build web applications and APIs that are robust and scalable. I ensure that the applications I develop are optimized for performance and security, and can handle high levels of traffic.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Security and Authentication:</b> I specialize in implementing robust security measures to protect web applications and APIs from cyber threats. I use techniques such as secure password storage, encryption, and two-factor authentication to ensure that data is kept safe and secure.</p>
            </li>

            <li>
              <BsCheckLg className='service__list-icon'/>
              <p><b>Cloud Services:</b> I am experienced in working with cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. I can help set up and configure cloud-based solutions such as virtual machines, databases, and web servers, to ensure that your application is scalable and highly available.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services