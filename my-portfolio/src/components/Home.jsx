import hero_img from '../assets/hero_img.svg'
import github_icon from '../assets/github_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'
import X_icon from '../assets/X_icon.svg'
import whatapp_icon from '../assets/whatapp_icon.svg'


{/* Contents of the Home page */}
export default function Home() {
    return (
        <div className= "home">
           <div className="home_img">
                <img src={hero_img} alt="Ambitious woman walking" />
           </div>
           <div className='home_content'>
                <div className='home_content_name'>
                    Hi, my name is Khairat Adesina
                </div>
                <div className='home_content_title'>
                    Software Engineer
                </div>
                <div className='home_content_body'>
                Results-driven Full Stack Software Engineer with multiple years of experience developing
                robust and scalable applications. Proficient in C programming, Python, Node.js, React.js,
                MySQL, Bootstrap, HTML, CSS and DevOps.
                </div>
                <div className='home_content_socials'>
                    <img src={github_icon} alt="Github icon" />
                    <img src={linkedin_icon} alt="LinkedIn icon" />
                    <img src={X_icon} alt="X icon" />
                    <img src={whatapp_icon} alt="WhatsApp icon" />
                </div>
           </div>
        </div>
    )
}
