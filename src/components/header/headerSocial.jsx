import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
const headerSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/kishan-dixit' target = '_blank'><BsLinkedin/>LinkedIn</a>
        <a href='https://github.com/Kishandixit' target = '_blank'><FaGithub/>Github</a>
        <a href='https://leetcode.com/kishandixit' target = '_blank'><SiLeetcode/>Leetcode</a>
    </div>
  )
}

export default headerSocial
