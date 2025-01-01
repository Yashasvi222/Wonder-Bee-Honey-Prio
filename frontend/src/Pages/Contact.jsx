import React from 'react'
import './Contact.css'
import ContactHead from '../Components/ContactHead/ContactHead'


const Contact = () => {
  return (
    <>
      <ContactHead/>
      <div className='contact-container'>
        
        <p className="contact-headline-upper">We are here for you,</p>
        <p className="contact-headline-lower">contact us <span className='contact-headline-lower-anytime'>anytime</span></p>
        <div className="contact-upper-divs-container">
          <div className="contact-upper-div-left">
            <p className="contact-phone-number-heading">Call, Text or WhatsApp</p>
            <p className="contact-phone-number">+91 9728955651 </p>
            <a className="contact-whatsapp" target='_blank' href="https://wa.link/a0gz3s">Click to text on whatsapp</a>

          </div>
          <div className="contact-upper-div-right">
            <p className="contact-email-id-heading">E-mail</p>
            <a className="contact-email-id" target='_blank' href="mailto:wonderbeeorganic@gmail.com">wonderbeeorganic@gmail.com</a>

          </div>
        </div>
        <div className="contact-lower-div">
          <p className='contact-maps-heading'>Find Us Here</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.2883961543826!2d75.75388099999999!3d29.156172599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233446bcc1165%3A0xa194c455c8b6560!2sWonder%20Bee%20Honey%20Products!5e0!3m2!1sen!2sin!4v1719081612100!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p className='contact-socials'>Our Social Media Handles</p>

      </div>
    </>
  )
}

export default Contact
