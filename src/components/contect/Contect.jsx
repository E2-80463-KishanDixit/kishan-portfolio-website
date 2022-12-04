import React from 'react'
import './contect.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contect = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wyjyvqs', 'template_nawxre9', form.current, '04Yxo7rp0oCPS9KB-')
    e.target.reset();
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contect'>
      <h5>Get In Touch</h5>
      <h2>Contect Me</h2>

      <div className="container contect_container">
        <div className="cotect_options">
          <article className='contect_option'>
              <AiOutlineMail className='contect_option-icon'/>
              <h4>Email</h4>
              <h5>kishandixt2000@gmail.com</h5>
              <a href='mailto:kishandixit2000@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contect_option'>
              <RiMessengerLine className='contect_option-icon'/>
              <h4>Messanger</h4>
              <h5>Kishan Dixit</h5>
              <a href='https://m.me/kishan.dixit.9440' target='_blank'>Send a message</a>
          </article>

          <article className='contect_option'>
              <ImWhatsapp className='contect_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+91 9045839741</h5>
              <a href='https://api.whatsapp.com/send?phone=+91 9045839741' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required/>
              <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>

      </div>
    </section >
  )
}

export default Contect
