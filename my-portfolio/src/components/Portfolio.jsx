// This file conteains content of the portfolio section

// Import the data for the portfolio casorel
import Slider from "react-slick";
import portfolio_data from "../../portfolio_data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Navbar() {
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 965,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true,
                    centerPadding: '15px'
                }
            }
        ]
    };
   
    return (
        <div className="portfolio">
            <p className="portfolio-title">Portfolio</p>
            <Slider {...settings}>
                {portfolio_data.map((d) => (
                    <div className="portfolio-body">
                        <div className="portfolio-img">
                            <img src={d.img} alt="Portfolio project images" />
                        </div>

                        <div className="portfolio-text">
                            <p className="portfolio-name">{d.name}</p>
                            <p className="portfolio-stack">{d.stack}</p>
                            <p className="portfolio-content">{d.content}</p>
                            <div className="portfolio-btn">
                                <button className="btn">Live Demo</button>
                                <button className="btn">View Code</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
