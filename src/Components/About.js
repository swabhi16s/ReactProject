import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About=()=> {
  return (
    <div className='about-section-container'>
    <div className="about-background-image-container">
    < img src={AboutBackground} alt=''/>
    </div>
    <div className="about-section-image-container">
    <img src={AboutBackgroundImage} alt=''/>
    </div>
    <div className="about-section-text-container">
    <p className="primary-subheading">About</p>
    <h1 className="primary-heading">
    Food Is An Important Part of A Balanced Diet.
    </h1>
    <p className="primary-text">
    Welcome to Foodie, where passion for food meets exceptional culinary experiences. Our journey began with a simple love for food and a desire to bring people together through delicious and wholesome meals. At Foodie, we believe in the power of good food to create unforgettable moments
    </p>
    <p className="primary-text">
    Our team of dedicated chefs and food enthusiasts work tirelessly to source the freshest ingredients and create dishes that are not only flavorful but also healthy. Whether you’re looking for a quick bite or a gourmet meal, we have something to satisfy every palate.
    </p>
    <p className="primary-text">
    We take pride in our commitment to quality, sustainability, and exceptional service. Our goal is to provide you with a dining experience that exceeds your expectations, whether you’re enjoying our food at our cozy restaurant or in the comfort of your own home through our delivery service.
    </p>
    <p className="primary-text">
    Join us on a culinary adventure and discover the joys of eating well at Foodie.
     </p>
     <div className="about-buttons-container">
     <button className="secondary-button">Learn more</button>
     <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
     </div>
    </div>
    </div>
  )
}

export default About