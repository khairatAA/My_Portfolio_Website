import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LaptopIcon, School2Icon, Star } from 'lucide-react';

function Timeline() {
  return (
    <>
        <VerticalTimeline lineColor='black'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
                contentStyle={{ background: '#7A78C4', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(222, 193, 39, 100%)' }}
                date="2024 - present"
                iconStyle={{ background: 'rgba(222, 193, 39, 100%)', color: 'black'}}
                icon={<Star />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">Mansa Stars</h4>
                <p>
                    Craft intuitive user interfaces and enhancing user experiences. Leveraging technologies like React.js and TypeScript.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
                date="2023 - 2024"
                contentStyle={{ background: '#7A78C4', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #7A78C4' }}
                iconStyle={{ background: 'rgba(222, 193, 39, 100%)', color:'black'}}
                icon={<LaptopIcon />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Software Engineering Student</h3>
                <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">ALX Africa</h4>
                <p>
                Applied concepts of C, Python, and MySQL to develop robust and scalable applications, honing my skills in backend development.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
                contentStyle={{ background: '#7A78C4', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(222, 193, 39, 100%)' }}
                date="2023"
                iconStyle={{ background: 'rgba(222, 193, 39, 100%)', color: 'black'}}
                icon={<Star />}
            >
                <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">Lagos State Science and Technology</h4>
                <p>
                    During my NYSC, I served in the Food Science and Technology department.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work w-full max-lg:w-9/12 max-sm:w-full"
                date="2017 - 2022"
                contentStyle={{ background: '#7A78C4', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #7A78C4' }}
                iconStyle={{ background: 'rgba(222, 193, 39, 100%)', color: 'black'}}
                icon={<School2Icon />}
            >
                <h3 className="vertical-timeline-element-title">B.Tech in Food Science and Technology</h3>
                <h4 className="vertical-timeline-element-subtitle pt-2 text-gold">Kwara State University, Malete</h4>
                <p>
                    Graduated with B.Tech in Food Science and Technology (3.46/4.00 CGPA)
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </>
  )
}

export default Timeline