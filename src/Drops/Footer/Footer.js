import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from "react-icons/bs";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
  render() {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="#/">Acerca de nosotros</a></li>
                    <li><a href="#/">Nuestros servicios</a></li>
                    <li><a href="#/">Politica de privacidad</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Ayuda</h4>
                <ul>
                  <li><a href="#/">Preguntas frecuentes</a></li>
                  <li><a href="#/">Envíos</a></li>
                  <li><a href="#/">Devoluciones</a></li>
                  <li><a href="#/">Estado de la orden</a></li>
                  <li><a href="#/">Métodos de pago</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Compra Online</h4>
                <ul>
                  <li><a href="#/">Pami</a></li>
                  <li><a href="#/">Belleza</a></li>
                  <li><a href="#/">Cuidado Personal</a></li>
                  <li><a href="#/">Salud y Farmacia</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Redes Sociales</h4>
                <script src="https://kit.fontawesome.com/b50de914ce.js" crossorigin="anonymous"></script>
                <div className="social-links">
                  <a href="https://www.facebook.com/FarmaciaDrops" target="_blank" rel='noreferrer'>
                  <FaFacebookF/></a>
                  <a href="https://www.instagram.com/farmacia_drops/" target="_blank" rel='noreferrer'>
                  <BsInstagram /></a>  
                </div>
              </div>
            </div>
          </div>
        </footer> 
      </>
    );
  }
}
  
  export default Footer; 