import React from 'react';
import Img from 'components/atoms/Img';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    infinite: false
  };
  return (
    <Slider {...settings}>
      <Img
        src={require('assets/img/yellow-carousel-mobile.jpg')}
        src2x={require('assets/img/yellow-carousel-mobile@2x.jpg')}
        srcLarge={require('assets/img/yellow-carousel-web.jpg')}
        srcLarge2x={require('assets/img/yellow-carousel-web@2x.jpg')}
        alt="yellow"
      />
      <Img
        src={require('assets/img/green-carousel-mobile.jpg')}
        src2x={require('assets/img/green-carousel-mobile@2x.jpg')}
        srcLarge={require('assets/img/green-carousel-web.jpg')}
        srcLarge2x={require('assets/img/green-carousel-web@2x.jpg')}
        alt="green"
      />
      <Img
        src={require('assets/img/blue-carousel-mobile.jpg')}
        src2x={require('assets/img/blue-carousel-mobile@2x.jpg')}
        srcLarge={require('assets/img/blue-carousel-web.jpg')}
        srcLarge2x={require('assets/img/blue-carousel-web@2x.jpg')}
        alt="blue"
      />
    </Slider>
  );
};

export default Carousel;
