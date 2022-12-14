import React from 'react'
import  './about.css'
import Me from '../../assets/me_about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderOpenLine} from 'react-icons/ri'
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me_img">
                    <img id='aboutImg' src={Me} alt="My Image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <a href='#experience'>
                    <article className='about_card'>
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>1+ Year Working</small>
                    </article>
                    </a>

                    <a href='#services'>
                    <article className='about_card'>
                        <FiUsers className='about_icon'/>
                        <h5> Services </h5>
                        <small>20+ Services</small>
                    </article>
                    </a>
                    <a href='#project'>
                    <article className='about_card'>
                        < RiFolderOpenLine className='about_icon'/>
                        <h5>Projects</h5>
                        <small>17 Projects</small>
                    </article>
                    </a>
                </div>

                <p>
                    "Hello!!! Here is my projects links. I also added summary about my project and 
                    I also mentioned technologies used in that project."
                </p>
                <a href = '#contect' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About