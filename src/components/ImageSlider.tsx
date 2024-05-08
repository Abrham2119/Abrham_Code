// components/ImageSlider.tsx

import React from 'react';
import Slider from 'react-slick';

const ImageSlider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
      </div>
    </Slider>
  );
};

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export default ImageSlider;
