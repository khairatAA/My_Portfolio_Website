/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// This file conteains content of the portfolio section

// Import the data for the portfolio casorel
import Slider from "react-slick";
import portfolio_data from "./Data/portfolio_data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from "./ScrollContext";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion"
import { AirplayIcon, Github } from "lucide-react";


const ProjectCard =({index, name,description,tags,image,source_code_link,live_link})=>{
    return(
        <motion.div>
            <Tilt
            options ={{
                max:45,
                scale: 1,
                speed: 450
              }}
              className ='bg-[#7A78C4] p-5 max-sm:p-2 rounded-2xl sm:w-[360px] w-full h-[510px] max-sm:h-[620px]'
            >
                <div>
                    <img src={image} alt={name} className='w-full max-md:h-40 object-cover rounded-2xl' />
                    <div className="absolute inset-0 flex justify-between m-3">
                        <div
                        onClick={()=>window.open(live_link,'_blank')}
                        className='bg-gold w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <AirplayIcon />
                        </div>
                        <div
                        onClick={()=>window.open(source_code_link,'_blank')}
                        className='bg-gold w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Github />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-gold font-bold text-[16px]'>{name}</h3>
                    <p className='mt-2 text-14px'>{description}</p>
                </div>
                
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map(
                        (tag) => (
                            <p  key={tag.name} className={`text-[14px]`} style={{color: `${tag.color}`}}>
                                #{tag.name}
                            </p>
                        )
                    )}
                </div>
            </Tilt>
        </motion.div>
    )
}


const Portfolio = ({ sectionId }) => {
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
        <div className="px-10 max-sm:px-5 pt-20 max-sm:pt-10 " id={sectionId} ref={sectionRef}>
            <h1 className="text-center font-extrabold text-5xl max-lg:text-4xl max-sm:text-3xl text-gold" data-aos="zoom-in">Portfolio</h1>
            <p className="text-center font-semibold text-lg">Explore my latest projects and see my skills in action.</p>

            <div className='mt-14 flex flex-wrap gap-7 justify-center'>
            {portfolio_data.map(
                (project, index)=>(
                    <ProjectCard key ={`project-${index}`} index={index} {...project}/>
                )
            )}
            </div>           
        </div>
    )
};

export default Portfolio;
