import { Link } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import { ScrollContext } from "./ScrollContext";


{/* The Navbar componet of the website */}
export default function Navbar() {

    // To scroll smoothly to the Contact me section
    const { setActiveSection } = useContext(ScrollContext);

    const scrollToContact = () => {
        setActiveSection('contact');
        const contactSection = document.getElementById('contact_me');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle the navbar for smaller mobile devices, closes when the screen is clicked
    useEffect(() => {
        const handleDocumentClick = (e) => {
          // Check if the navbar is open and the click is outside the navbar
          const navbar = document.querySelector('.navbar-collapse');
          const toggleButton = document.querySelector('.navbar-toggler');
    
          if (navbar.classList.contains('show') && !navbar.contains(e.target) && toggleButton !== e.target) {
            navbar.classList.remove('show');
          }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    // handles when a section of the nabar is clicked on smaller devices, it closes automatically
    const handleLinkClick = () => {
        const navbar = document.querySelector('.navbar-collapse.show');
        if (navbar) {
          navbar.classList.remove('show');
        }
    };

    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
            <a href='/' className="navbar-brand">Khairat</a>
            {/* Responsive icon */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            {/* Full Navbar content */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href='/' className="nav-link home-colour">Home</a>
                    </li>

                    <li className="nav-item">
                        <a href='#about' className="nav-link" onClick={handleLinkClick}>About Me</a>
                    </li>

                    <li className="nav-item">
                        <a href='#portfolio' className="nav-link" onClick={handleLinkClick}>Portfolio</a>
                    </li>

                    <li className="nav-item">
                        <a href='#skills' className="nav-link" onClick={handleLinkClick}>Skills</a>
                    </li>

                    <li className="nav-item">
                        <a href='#services' className="nav-link" onClick={handleLinkClick}>Services</a>
                    </li>
                    {/* Add similar links for other sections */}
                </ul>

                {/* Button on the left */}
                <button className='btn' onClick={scrollToContact}>
                        Contact Me
                </button>
            </div>
        </div>
    </nav>
    )
}
