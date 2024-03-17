/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from "./ScrollContext";
import Timeline from "./Timeline";

/* About section */

const About = ({ sectionId }) => {

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
        <div className=" pt-28 px-10 max-sm:px-5 flex w-full" id={sectionId} ref={sectionRef}>
            <div className=" flex flex-col gap-8 w-full">
                <div className=" flex flex-col">
                    <p className="text-3xl max-lg:text-2xl max-sm:text-xl font-medium text-center">WHAT I HAVE DONE SO FAR</p>
                    <p className="font-extrabold text-5xl max-lg:text-4xl max-sm:text-3xl text-center text-gold" data-aos="zoom-in">Experience</p>
                </div>
                <Timeline />
            </div>
        </div>
    )
}

export default About;
