import React from 'react'
import Kishan_Resume from '../../assets/Kishan_Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={Kishan_Resume} download className='btn'>Download Resume</a>
      <a href='#contect' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
