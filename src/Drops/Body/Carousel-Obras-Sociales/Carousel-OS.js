import React from "react";
import "./Carousel-OS.css";

class CarouselOS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="slider1">
          <div className="slide-track1">
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
            <div className="slide1">
              <img src="/img/tarjeta.png" alt="Logo" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CarouselOS;
