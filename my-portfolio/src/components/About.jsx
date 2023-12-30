import About_me from "../assets/about_me.svg";
import React, { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from "./ScrollContext";

/* About section */

const About = ({ sectionId }) => {
    // Open Resume URL
    const openResumeUrl = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1bjMnbFqPxgDdAzdxSoY2yqp70DBXqwyJ/view?usp=sharing';
        window.open(resumeUrl, '_blank');
    };

    // Handles the scrolling effect even the function is clicked from the navbar
    // Using Intersection observer
    const { setActiveSection } = useContext(ScrollContext);
    const sectionRef = useRef(null);

    useEffect(() => {
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

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [setActiveSection, sectionId]);
    
    return (
        <div className="about" id={sectionId} ref={sectionRef}>
            <div className="about_content">
                <div className="about_content_title">
                    <p className="about_title">
                        What am I all
                    </p>
                    <p className="about_title">
                        about?
                    </p>
                </div>
                <div className="about_content_text">
                    <p className="content"> Welcome to my portfolio! I'm thrilled that you're exploring my work.
                        My passion lies in constructing both frontend and backend components of applications. As a Full-
                        stack Software Engineer, I specialize in a wide array of technologies including C programming,
                        Python, React JS, Node JS, MySQL, HTML, and CSS.
                        I'm dedicated to crafting robust solutions that merge creativity with functionality,
                        aiming to create seamless user experiences and scalable applications.
                    </p>

                    <p className="about_content_edu_title">My Educations</p>
                    <div className="about_content_edu">
                        <div className="edu">
                            <p className="edu_title">
                                ALX SE Program
                            </p>
                            <p className="edu_degree">
                                Internship
                            </p>
                        </div>
                        <div className="edu">
                            <p className="edu_title">Kwara State University</p>
                            <p className="edu_degree">
                                B.Tech (Food Sci & Tech)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about_content_btn">
                    <button className='btn' onClick={openResumeUrl}>
                        View Resume
                    </button>
                </div>
            </div>
            <div className="about_img">
                <img src={About_me} alt="Lady sitting in front of a screen" />
            </div>
        </div>
    )
}

export default About;
