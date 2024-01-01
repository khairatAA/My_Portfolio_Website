// Skills section of the portfolio website
import React, { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from "./ScrollContext";
import skills_data from '../../skills_data';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = ({ sectionId }) => {
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

    return(
        <div className="skills" id={sectionId} ref={sectionRef}>
            <p className="skills-title" data-aos="zoom-in">Skills</p>
            <div className='skills-logo' data-aos="zoom-out">
                {skills_data.map((skill, index) => (
                    <div className='skills-background' key={index}>
                        <div className='skill-card'>
                            <img src={skill.img} className='skill-img' alt="Skill icons" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="skill_content_btn">
                <button className='btn' data-aos="fade-down">
                    More Skills
                </button>
            </div>
        </div>       
    );
}

export default Skills;
