import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am </h5>
        <h1>Kishan Dixit</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='myself'>
             <img src={me} alt='Me'/>
        </div>
        <div>
            <a href='#contect' className='scrolll_down'>Scroll Down</a>
        </div>
        
      </div>
    </header>
  )
}

export default header
