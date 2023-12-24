import { Link } from 'react-router-dom';
import About from './About';
import React, { useState } from 'react';
import ContactMe from './Contact';


{/* The Navbar componet of the website */}
export default function Navbar() {
    const [showContactForm, setShowContactForm] = useState(false);
   
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Khairat</Link>
            {/* Responsive icon */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            {/* Full Navbar content */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link home-colour" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#Skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#Services">Services</Link>
                    </li>
                    {/* Add similar links for other sections */}
                </ul>

                {/* Button on the left */}
                {/* <button className='nav-btn' onClick={() => setShowContactForm(true)}>
                        Contact Me
                </button>

                {showContactForm && <ContactMe onClose={() => setShowContactForm(false)} />} */}

                <button className='nav-btn'>
                        Contact Me
                </button>
            </div>
        </div>
    </nav>
    )
}