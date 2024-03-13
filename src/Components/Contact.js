import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="contenter">
          <div className="left-side">
            <div className="address details">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div className="topic">Address</div>
              <div className="text-one">9/12, Vathiyar Thtottam, 2nd Street,  </div>
              <div className="text-two">Kodambakkam, Chennai 600 024.</div>
            </div>
            <div className="phone details">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <div className="topic">Phone</div>
              <div className="text-one">+91 72000 11181</div>
              <div className="text-two"> +91 72990 11181</div>
            </div>
            <div className="email details">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="topic">Email</div>
              <div className="text-one">info@evergreenmandhra.co.in </div>
              <div className="text-two">nathan@evergreenmandhra.co.in </div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any inquiries about our courier services or need assistance with your shipment, please don't hesitate to contact us. We're here to help!</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="buttonn">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
