import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LaptopIcon, School2Icon, Star } from "lucide-react";

function Timeline() {
  return (
    <>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          contentStyle={{ background: "#7A78C4", color: "black" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(222, 193, 39, 100%)",
          }}
          date="2024 - present"
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<Star />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            Mansa Stars
          </h4>
          <p>
            Designed and developed the user-centric frontend interface of a
            Customer Relationship Management (CRM) tool leveraging React JS and
            Typescript, enhancing user experience and enabling business owners
            (founders) to efficiently track communications, foster meaningful
            relationships with leads and clients, and drive business growth.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          date="2023 - 2024"
          contentStyle={{ background: "#7A78C4", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A78C4" }}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<LaptopIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Software Engineering Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            ALX Africa
          </h4>
          <p>
            Horned my skills with the use of programming languages and
            frameworks such as C, Javascript, Python, React JS, Node JS, MySQL,
            Test Driven Development, Web infrastructure design. And also other
            tools such as Git and GitHub, Bash scripting, Data Structure and
            Algorithms and dubugging.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          contentStyle={{ background: "#7A78C4", color: "black" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(222, 193, 39, 100%)",
          }}
          date="2023"
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<Star />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            Lagos State University of Science and Technology
          </h4>
          <p>
            During my NYSC, I served in the Food Science and Technology
            department.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
          date="2017 - 2022"
          contentStyle={{ background: "#7A78C4", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A78C4" }}
          iconStyle={{ background: "rgba(222, 193, 39, 100%)", color: "black" }}
          icon={<School2Icon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech in Food Science and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">
            Kwara State University, Malete
          </h4>
          <p>
            Graduated with B.Tech in Food Science and Technology (3.46/4.00
            CGPA)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
