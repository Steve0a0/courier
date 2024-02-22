import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="hero">
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="hero-content">
          <h2>Welcome to our website</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni iste enim quod repellat minus blanditiis consectetur, obcaecati, ut velit fuga illum sapiente atque, dignissimos error officiis dolorum eius minima est!</p>
        </div>
        <div className="hero-image">
          <img src="https://digitalupgrade.com/images/lobbyimage_1.jpg" alt="" />
        </div>
      </div>
    </section>

  );
};

export default About;
