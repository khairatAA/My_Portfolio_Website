import hero_img from '../assets/hero_img.svg'
import github_icon from '../assets/github_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'
import X_icon from '../assets/X_icon.svg'
import whatapp_icon from '../assets/whatapp_icon.svg'
import TypewriterComponent from "./TypingEffect";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from "./ScrollContext";
import AOS from 'aos'; // For animation
import 'aos/dist/aos.css';
import ParticleEffect from './ParticleEffect';


{/* Contents of the Home page */}
const Home = ({ sectionId }) => {
    const originalText = "Khairat Adesina";
    const TypingSpeed = 500;
    const githubUrl = 'https://github.com/khairatAA';
    const linkedinUrl = 'https://www.linkedin.com/in/khairat-adesina1234/';
    const XUrl = 'https://twitter.com/_dedamola';
    const whatsAppUrl = 'https://wa.me/qr/JNIEBHHUOJ6WP1'

    // Handles the scrolling effect even the function is clicked from the navbar
    // Using Intersection observer
    const { setActiveSection } = useContext(ScrollContext);
    const sectionRef = useRef(null);

    // To get currecnt section for the reat particles
    const [currentSection, setCurrentSection] = useState('home');

    useEffect(() => {

        // Get current section for the react partcles
        const handleScroll = () => {
            // Determine the current section based on scroll position
            // For simplicity, let's assume 'home' section is at the top
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop < 200) {
              setCurrentSection('home');
            } else {
              setCurrentSection(''); // If not in the 'home' section
            }
        };

        // Animate on scroll
        AOS.init({duration: 2000}); // Initialize AOS
        AOS.refresh();
        AOS.refreshHard();
        AOS.refreshHard();
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(sectionId);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [setActiveSection, sectionId]);

    return (
        <div className= "home" id={sectionId} ref={sectionRef}>
            {currentSection === 'home' && <ParticleEffect />}
           <div
           className="home_img">
                <img src={hero_img} className='girl_img' alt="Ambitious woman walking" />
           </div>
           <div className='home_content'>
                <div className='home_content_name'>
                  <p data-aos="fade-right">Hi, my name is </p>
                  <TypewriterComponent />
                </div>
                <div className='home_content_title' data-aos="fade-left">
                    Software Engineer
                </div>
                <div className='home_content_body'>
                Results-driven Full Stack Software Engineer with multiple years of experience developing
                robust and scalable applications. Proficient in C programming, Python, Node.js, React.js,
                MySQL, Bootstrap, HTML, CSS and DevOps.
                </div>
                <div className='home_content_socials'>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" data-aos="zoom-in-down">
                        <img className='socials_icon' src={github_icon} alt="Github icon" />
                    </a>

                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" data-aos="zoom-in-down">
                        <img className='socials_icon' src={linkedin_icon} alt="LinkedIn icon" />
                    </a>

                    <a href={XUrl} target="_blank" rel="noopener noreferrer" data-aos="zoom-in-down">
                        <img className='socials_icon' src={X_icon} alt="X icon" />
                    </a>

                    <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" data-aos="zoom-in-down">
                        <img className='socials_icon' src={whatapp_icon} alt="WhatsApp icon" />
                    </a>
                </div>
           </div>
        </div>
    )
};

export default Home;
