import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faDolly, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import './Service.css';

const Service = () => {
  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for (var i=0;i<reveals.length;i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight -revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');

      }
    }
  }
  return (
    <div className="containers">
      <h1>Our Services</h1>
      <div className="row">
        <div className="service">
          <FontAwesomeIcon icon={faTruck} className='icon' />
          <h2>Express Delivery</h2>
          <p>Offer expedited delivery services for urgent shipments that need to be delivered quickly</p>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faDolly} className='icon'/>
          <h2>International Shipping</h2>
          <p>Showcase your capability to handle international shipments, including customs clearance, documentation, and delivery to destinations around the world.</p>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faPlaneDeparture} className='icon'/>
          <h2>Customized Delivery Solutions</h2>
          <p>Offer expedited delivery services for urgent shipments that need to be delivered quickly</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
