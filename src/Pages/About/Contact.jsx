import React from 'react'
import Header from '../../components/Header'
import Phone from '../../assets/phone.jpg'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
        <form className={styles.contactForm}>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
);
};


export default Contact
