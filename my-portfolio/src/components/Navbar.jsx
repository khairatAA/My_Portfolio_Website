{/* The Navbar componet of the website */}
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Khairat</Link>
            {/* Responsive icon */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            {/* Full Navbar content */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Services">Services</Link>
                    </li>
                    {/* Add similar links for other sections */}

                    {/* Button on the left */}
                    <button className="btn btn-sm btn-outline-secondary ms-auto" type="button">Button</button>
                </ul>
            </div>
            
        </div>
    </nav>
    )
}