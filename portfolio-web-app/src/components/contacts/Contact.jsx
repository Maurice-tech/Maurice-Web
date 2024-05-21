import React from 'react'
import './contact.css'
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { format } from 'url';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9rin1s', 'template_uirhtid', form.current,  '76MIEhlpmxriKIS9k')
    e.target.reset()
         
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>irenemaurice1996@gmail.com</h5>
            <a href="mailto:irenemaurice1996@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Maurice Irene</h5>
            <a href="https://www.facebook.com/maurice.irene.5?mibextid=LQQJ4d" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaSquareWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348036841162</h5>
            <a href="https://api.whatsapp.com/send?phone=2348036841162" target="_blank">Send a message</a>
          </article>


        </div>

        {/* End OF Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    
    </section>
  )
}

export default Contact