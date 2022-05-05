import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

// Images 
import slickImage1 from '../../utils/slick-image1.png';
import slickImage2 from '../../utils/slick-image2.png';
import slickImage3 from '../../utils/slick-image3.png';
import slickImage4 from '../../utils/slick-image4.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div className="sliderWrapper" >
        <Slider {...settings}  >
          <img src={slickImage1} alt='brand' />
          <img src={slickImage2} alt='brand'  />
          <img src={slickImage3} alt='brand'  />
          <img src={slickImage4} alt='brand' />  
        </Slider>
      </div>
    );
  }
}