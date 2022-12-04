import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='services'>
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li><BsCheckLg className='services_list-icon'/>
            <p>Custom Web Design.</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Corporete Branding and Graphic Design.</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Wireframing</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Mobile App Design.</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Product Design</p>
            </li>
          </ul>
        </article>
          
         
        <article className='services'>
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li><BsCheckLg className='services_list-icon'/>
            <p>Full Stack Development</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>E-commerce Development</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Customized Web App Development</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Static Web Servces </p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Responsive Design</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Java Software Development</p>
            </li>
          </ul>
        </article>



        <article className='services'>
          <div className="services_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li><BsCheckLg className='services_list-icon'/>
            <p>Copywriting Services</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Graphic Design Services</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Video Marketing Services</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>Blog Writting Services</p>
            </li>

            <li><BsCheckLg className='services_list-icon'/>
            <p>White Papper Marketing Services</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services
