import { Link } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import { ScrollContext } from "./ScrollContext";
import { ButtonComponent } from './Reuseables';

export default function Navbar() {
    const { setActiveSection } = useContext(ScrollContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToContact = () => {
        setActiveSection('contact');
        const contactSection = document.getElementById('contact_me');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className=" shadow-lg sticky top-0 bg-purple z-50 px-10 max-sm:px-5">
            <div className=" mx-auto bg-purple">
                <div className="flex py-3 justify-between items-center">
                    <div className="flex flex-row items-center justify-between max-lg:w-full">
                        <a href='/' className=" text-gold font-bold text-2xl no-underline">
                            Khairat
                        </a>
                        {/* Menu button for smaller screens */}
                        <button className="lg:hidden ml-auto mobile-menu-button" onClick={handleMenuToggle}>
                            <svg className="w-8 h-8" fill="none" stroke="rgb(222, 193, 39)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Menu items for larger screens */}
                    <ul className="hidden lg:flex mb-0 items-center space-x-4">
                        <li>
                            <a href='/' className=" px-2 text-[black] font-medium no-underline text-xl hover:text-gold">Home</a>
                        </li>
                        <li>
                            <a href='#about' className="px-2 text-[black] font-medium no-underline text-xl hover:text-gold" onClick={handleLinkClick}>About Me</a>
                        </li>
                        <li>
                            <a href='#portfolio' className="px-2 text-[black] font-medium no-underline text-xl hover:text-gold" onClick={handleLinkClick}>Portfolio</a>
                        </li>
                        <li>
                            <a href='#skills' className="px-2 text-[black] font-medium no-underline text-xl hover:text-gold" onClick={handleLinkClick}>Skills</a>
                        </li>
                        <li>
                            <a href='#services' className="px-2 text-[black] font-medium no-underline text-xl hover:text-gold" onClick={handleLinkClick}>Services</a>
                        </li>
                    </ul>
                    {/* Contact Me button for larger screens */}
                    <div className="hidden lg:flex items-center space-x-4" onClick={() => {
                            scrollToContact();
                            handleLinkClick();
                    }}>
                        <ButtonComponent
                            text='Contact Me'
                        />
                    </div>
                </div>
                {/* Collapsible menu for smaller screens */}
                {isMenuOpen && (
                    <div className=" lg:hidden absolute inset-x-0 top-16 z-50 bg-purple w-full">
                        <ul className="flex flex-col space-y-1 w-full pr-5">
                            <li onClick={() => { handleLinkClick(); scrollToSection('home'); }} className="px-2 text-[black] py-2 cursor-pointer font-medium no-underline hover:text-gold text-xl">
                                Home
                            </li>
                            <li onClick={() => { handleLinkClick(); scrollToSection('about'); }} className="px-2 text-[black] py-2 cursor-pointer font-medium no-underline text-xl hover:text-gold ">
                                About Me
                            </li>
                            <li onClick={() => { handleLinkClick(); scrollToSection('portfolio'); }} className="px-2 text-[black] py-2 cursor-pointer font-medium no-underline text-xl hover:text-gold ">
                                Portfolio
                            </li>
                            <li onClick={() => { handleLinkClick(); scrollToSection('skills'); }} className="px-2 text-[black] py-2 cursor-pointer font-medium no-underline text-xl hover:text-gold ">
                                Skills
                            </li>
                            <li onClick={() => { handleLinkClick(); scrollToSection('services'); }} className="px-2 text-[black] py-2 cursor-pointer font-medium no-underline text-xl hover:text-gold ">
                                Services
                            </li>
                        </ul>
                        <div className=' pl-7 pb-3' onClick={() => {
                            scrollToContact();
                            handleLinkClick();
                        }}>
                            <ButtonComponent
                                text='Contact Me'
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
