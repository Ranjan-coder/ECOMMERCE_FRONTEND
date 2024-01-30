// ImageSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
  };

  return (
    <Slider {...settings}>
      <div className='sliderimageparent'>
        <img className='sliderimage' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cd0f278b76664ba6.jpeg?q=20" alt="Slide 1" />
      </div>
      <div className='sliderimageparent'>
        <img className='sliderimage' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9021283f0be266c1.jpg?q=20" alt="Slide 2" />
      </div>
      <div className='sliderimageparent'>
        <img className='sliderimage' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20" alt="Slide 3" />
      </div>
      <div className='sliderimageparent'>
        <img className='sliderimage' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0f9ecd9ce4f86cfa.jpg?q=20" alt="Slide 4" />
      </div>
      <div className='sliderimageparent'>
        <img className='sliderimage' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20" alt="Slide 5" />
      </div>
      
      
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
