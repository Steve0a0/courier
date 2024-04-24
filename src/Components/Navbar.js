import React, { useState } from 'react'
import logo1 from '../images/logo1.png'
import './Navbar.css'

export const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    const openWhatsApp = () => {
        const phoneNumber = '+353894274383'; 
        const message = 'I want to book a ground.'; 

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <nav>
            <div className="logo">
            <a href="#">
              <img src={logo1} alt="Company Name" />
            </a>
          </div>
            <div className='navlis'>
                <a  className= 'booking' href='/' onClick={openWhatsApp}>Book Quote</a>
            </div>
            <div id='mobile' onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    )
}

export default Navbar