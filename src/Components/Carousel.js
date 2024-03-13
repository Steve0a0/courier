import React, { useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);

    
    return () => {
      document.querySelector(".logos").removeChild(copy);
    };
  }, []);
  return (
    <div className='car'>
      <h1>Items Excepted</h1>
    <div class="logos">
    <ul class="logos-slide">
      <li>Sweets</li>
        <li>Snacks</li>
        <li>Pickles</li>
        <li>Clothes</li>
        <li>Utensils</li>
        <li>Flours</li>
        <li>Spices</li>
        <li>Household items</li>
        <li>Navarathri Golu Dolls</li>
    </ul>
  </div>
  </div>
  );
};

export default Carousel;
