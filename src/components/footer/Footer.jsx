import React from 'react'
import './footer.css' 
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsYoutube} from 'react-icons/bs'
const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href='#' className='footer_logo'>Kishan Dixit</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href='#acheivements'>Acheivements</a></li>
          <li><a href='#contect'>Contect</a></li>
        </ul>

        <div className='footer_socials'>
          <a href='https://www.linkedin.com/in/kishan-dixit'><FaLinkedin/></a>
          <a href='https://github.com/Kishandixit'><BsGithub/></a>
          <a href='https://discord.gg/29Yxw7auSV'><SiDiscord/></a>
          <a href='https://twitter.com/KishanD66054147?s=08'><TbBrandTelegram/></a>
          <a href='https://www.youtube.com/channel/UCqdeiHrHWA4Eti-rbUL7XOw/featured'><BsYoutube/></a>
          <a href='https://www.facebook.com/kishan.dixit.9440'><FaFacebookF/></a>
          <a href='https://instagram.com/kishan__dixit?utm_medium=copy_link'><FaInstagram/></a>
          <a href='https://twitter.com/KishanD66054147?s=08'><FaTwitterSquare/></a>
        </div>

        <div className="footer_copyright">
          <small>&copy; Kishan Tutorials. All rights reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer