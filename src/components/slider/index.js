import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import Flower from 'images/slider/flower.jpg';
import Food from 'images/slider/food.jpg';
import Phone from 'images/slider/phone.jpg';

import './slider.component.styl';

export const Slider =  () => (
  <Carousel
    className="slider-block"
    showArrows={true}
    autoplay={true}
    showStatus={false}
    showThumbs={false}
  >
      <div>
          <img src={Flower}/>
      </div>
      <div>
          <img src={Food}/>
      </div>
      <div>
          <img src={Phone}/>
      </div>
  </Carousel>
);
