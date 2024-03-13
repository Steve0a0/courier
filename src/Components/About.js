import React from 'react';
import './About.css';
import ever from '../images/ever.jpg'

const About = () => {
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
    }}
  return (
    <section className="hero">
      <div className="heading ">
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="hero-content">
          <p>The Evergreen Mandhra courier service delivered its first order in September 2018. We can deliver exactly when you want and can start processing your order almost immediately after we receive it, or we can deliver on a specific day and time. Send and track your goods worldwide, door-to-door. Whether it’s a bulky pallet, large package or single document, you can choose from a wide range of express services. For heavy freight, there are fast and economical options available. </p>
        </div>
        <div className="hero-image">
          <img src={ever} alt="" />
        </div>
      </div>
    </section>

  );
};

export default About;
