/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Skills section of the portfolio website
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "./ScrollContext";
import skills_data from "./Data/skills_data";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
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
        rootMargin: "0px",
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
    <div
      className="pt-28 px-10 max-sm:px-5 flex flex-col items-center"
      id={sectionId}
      ref={sectionRef}
    >
      <h1
        className="font-extrabold text-5xl max-lg:text-4xl max-sm:text-3xl text-center text-gold"
        data-aos="zoom-in"
      >
        Skills
      </h1>
      <p className=" text-center font-semibold text-lg">
        Discover my varied skill set.
      </p>
      <div className=" flex flex-wrap justify-center gap-8">
        {skills_data.map((skill, index) => (
          <motion.div
            key={index}
            data-tooltip-id={skill.dataTooltipId}
            data-tooltip-content={skill.dataTooltipContent}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className=" w-28 h-28 flex items-center justify-center rounded-full bg-[#7A78C4] shadow-md cursor-pointer  border-2 border-[#7A78C4] hover:border-gold transition-transform"
              key={index}
            >
              <div>
                <img src={skill.img} className=" w-16 h-14" alt="Skill icons" />
              </div>
            </Tilt>
            <Tooltip
              id={skill.dataTooltipId}
              style={{
                backgroundColor: `${skill.backgroungColor}`,
                color: `${skill.color}`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
