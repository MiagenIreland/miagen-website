import React from 'react'
import Header from '../../components/Header'



const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="form-wrapper">
        <form className="contactForm">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Contact
