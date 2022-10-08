import "./Body.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import backgroundimage from "../Assets/bgimage.jpg";
import Contact from './Contact/Contact';
import Cards from './Drops-Cards/Drops-Cards';

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
      <Cards/>
      <Contact/>
    </>
  );
}

export default ControlledCarousel;
