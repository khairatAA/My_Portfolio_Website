// This file conteains content of the portfolio section

// Import the data for the portfolio casorel
import Slider from "react-slick";
import portfolio_data from "../../portfolio_data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from "./ScrollContext";

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

    /* react-slick for creating caserol */
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    id: 1,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 965,
                settings: {
                    id: 2,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    id: 3,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true,
                    centerPadding: '15px'
                }
            },
            {
                breakpoint: 400,
                settings: {
                    id: 4,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:false,
                    centerPadding: '0px'
                }
            }
        ]
    };
   
    return (
        <div className="portfolio" id={sectionId} ref={sectionRef}>
            <p className="portfolio-title" data-aos="zoom-in">Portfolio</p>
            <Slider {...settings}>
                {portfolio_data.map((d) => (
                    <div className="portfolio-body">
                        <div className="portfolio-img">
                            <img src={d.img} alt="Portfolio project images" />
                        </div>

                        <div className="portfolio-text">
                            <p className="portfolio-name">{d.name}</p>
                            <p className="portfolio-stack" data-aos="fade-right">{d.stack}</p>
                            <p className="portfolio-content">{d.content}</p>

                            <div className="portfolio-btn">
                                <a href={d.liveDemoUrl} target="_blank" rel="noopener noreferrer" data-aos="fade-down">
                                    <button className="btn">Live Demo</button>
                                </a>
                                <a href={d.ViewCodeUrl} target="_blank" rel="noopener noreferrer" data-aos="fade-down">
                                    <button className="btn">View Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
};

export default Portfolio;
