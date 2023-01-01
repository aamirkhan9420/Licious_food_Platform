import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from "./Home.module.css"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( <div className={style.Carouselcontainer}>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item  className={style.big_img_container} >
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
          alt="Second slide"
        />

       
      </Carousel.Item>
    

    </Carousel>
   </div>
  );
}

