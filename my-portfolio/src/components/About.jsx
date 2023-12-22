import About_me from "../assets/about_me.svg";

/* About section */

export default function Navbar() {
   
    return (
        <div className="about" id="About">
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
                    <p> Welcome to my portfolio! I'm thrilled that you're exploring my work.
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
                    <button className='btn'>
                        View Resume
                    </button>
                    {/* <button className='btn'>
                        View Portfolio
                    </button> */}
                </div>
            </div>
            <div className="about_img">
                <img src={About_me} alt="Lady sitting in front of a screen" />
            </div>
        </div>
    )}