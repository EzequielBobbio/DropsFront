// import React from 'react';
import './Body.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import backgroundimage from '../Assets/bgimage.jpg'
// import arrow from '../Assets/arrow.png'
// import mujerposando from '../Assets/Mujercaminando.jfif'

  function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='hero-image-1'>
      <Carousel.Item>
        <img
          className="d-block"
          src={backgroundimage} 
          alt="Mujer posando"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={backgroundimage} 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={backgroundimage} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// class Body extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};

//       const productContainers = [...document.querySelectorAll('.product-container')];
//       const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
//       const preBtn = [...document.querySelectorAll('.pre-btn')];

//       productContainers.forEach((item, i) => {
//         let containerDimensions = item.getBoundingClientRect();
//         let containerWidth = containerDimensions.width;

//       nxtBtn[i].addEventListener('click', () => {
//           item.scrollRight += containerWidth;
//       })

//       preBtn[i].addEventListener('click', () => {
//           item.scrollLeft -= containerWidth;
//       })
// })
//     }
  
  // render() {
  //   return (
  //     <>
  //       <main>
  //         <div className='body'>
  //           <div>
  //             <img className='background-image' src={backgroundimage} alt='Imagen de farmacia'/>
  //           </div>
  //           <div className='body-container'>
  //             <div className='eslogan'>
  //               <p>Vení a disfrutar de una atención <i>100% personalizada</i></p>
  //             </div>
  //           </div>
  //           <section class="product">
  //             <h2 class="product-category">Best selling</h2>
  //             <button class="pre-btn"><img src={arrow} alt="Mujer con ropa" /></button>
  //             <button class="nxt-btn"><img src={arrow} alt="Ropa colgada" /></button>
  //             <div class="product-container">
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //               <div class="product-card">
  //                 <div class="product-image">
  //                   <span class="discount-tag">50% Off</span>
  //                   <img src={mujerposando} alt=""/>
  //                   <button class="card-btn">add to Wishlist</button>
  //                 </div>
  //                 <div class="product-info">
  //                   <h2 class="product-brand">DROPS</h2>
  //                   <p class="product-short-description">Short line about the product</p>
  //                   <span class="price">$20</span>
  //                   <span class="actual-price">$40</span>
  //                 </div>
  //               </div>
  //             </div>
  //           </section>
  //         </div>
  //       </main>
  //     </>
  //   );
  
  export default ControlledCarousel; 