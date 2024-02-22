import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../images/logo.png'
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="logo">
            <a href="#">
              <img src={logo} alt="Company Name" />
            </a>
          </div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Services</a>
				<a href="/#">Tracking</a>
				<a href="/#">Contact</a>
                <div className="header-cta">
            <a href="#" className="btn">Get Quote</a> 
          </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            
		</header>
	);
}

export default Navbar;