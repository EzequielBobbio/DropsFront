/* eslint-disable no-unused-expressions */
// import React from 'react';
import "./Body.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import backgroundimage from "../Assets/bgimage.jpg";
import Contact from './Contact/Contact';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="hero-image-1"
      >
        <Carousel.Item>
          <img className="d-block" src={backgroundimage} alt="Mujer posando" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={backgroundimage} alt="Second slide" />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={backgroundimage} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Contact/>
    </>
  );
}

export default ControlledCarousel;
