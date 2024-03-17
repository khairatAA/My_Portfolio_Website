/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Implementation of contact me feature using email.js library, to send free emails from the website

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
// import dotenv from 'dotenv';
// dotenv.config();


const ContactMe = ({ onClose }) => {
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
    <div className='pt-28 px-10 max-sm:px-3 flex flex-col items-center pb-20 w-full' id='contact_me'>
    <p className='font-extrabold text-5xl max-lg:text-4xl max-sm:text-3xl text-center text-gold' data-aos="zoom-in">Contact <span className="text-[black]">Me</span></p>

    <div className=' w-[400px] max-sm:w-full'>

        {notification && (
            <div className={`notification ${notification.type} font-bold`}>
                {notification.message}
            </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="w-full max-sm:w-[100%]">
            <label className="mt-4 font-bold text-gold">Name</label>
            <input type="text" name="user_name" className="w-full h-10 px-3 mt-1 outline-none rounded-md border-2 border-gold hover:border-[black] bg-purple" />
            <label className="mt-4 font-bold text-[black]">Email</label>
            <input type="email" name="user_email" className="w-full h-10 px-3 mt-1 outline-none rounded-md border-2 border-[black] hover:border-gold bg-purple" />
            <label className="mt-4 font-bold text-gold">Message</label>
            <textarea name="message" className="w-full px-3 py-2 mt-1 outline-none rounded-md border-2 border-gold hover:border-[black] bg-purple"></textarea>
            <input type="submit" value="Send" className="mt-8 w-full text-base text-center py-2 px-4 bg-gold rounded-md border-2 border-gold flex justify-center items-center gap-2 text-purple hover:text-gold hover:bg-purple shadow transition-all duration-200" />
        </form>
    </div>
</div>

  );
};

export default ContactMe;
