// Implementation of contact me feature using email.js library, to send free emails from the website

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
// import dotenv from 'dotenv';
// dotenv.config();


export default function ContactMe({ onClose }) {
    const [notification, setNotification] = useState(null);
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY,
            )
            
            .then((result) => {
                console.log(result.text);
                setNotification({ type: 'success', message: 'Message sent successfully!' });
                console.log("message sent");
                // onClose();
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setNotification({ type: 'error', message: 'Failed to send message. Please try again later.' });
            });
    };

  return (
    <div className='contact-me'>
        <p className='contact-me-title'>Contact <span>Me</span></p>

        <div className='contact-me-form'>

            {notification && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
};
