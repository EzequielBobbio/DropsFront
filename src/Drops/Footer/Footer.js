import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

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
                  <li>
                    <a href="#/">Acerca de nosotros</a>
                  </li>
                  <li>
                    <a href="#/">Nuestros servicios</a>
                  </li>
                  <li>
                    <a href="#/">Política de privacidad</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Ayuda</h4>
                <ul>
                  <li>
                    <a href="#/">Preguntas frecuentes</a>
                  </li>
                  <li>
                    <a href="#/">Envíos</a>
                  </li>
                  <li>
                    <a href="#/">Devoluciones</a>
                  </li>
                  <li>
                    <a href="#/">Estado de la orden</a>
                  </li>
                  <li>
                    <a href="#/">Métodos de pago</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Visitanos</h4>
                <ul>
                  <li>
                    <p href="#/">Nogoya 3141, Villa del Parque, CABA, Argentina</p>
                  </li>
                  <h4>Contacto</h4>
                  <li>
                    <p href="#/">(11)3087-3144</p>
                  </li>
                  <li>
                    <p href="#/">farmaciadrops@gmail.com</p>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Redes Sociales</h4>
                <script
                  src="https://kit.fontawesome.com/b50de914ce.js"
                  crossorigin="anonymous"
                ></script>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/FarmaciaDrops"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/farmacia_drops/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                    </a>
                  <a
                    href="https://wa.me/5491130873144?text=Hola%2C%20quer%C3%ADa%20preguntar%20sobre..."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsWhatsapp/>
                  </a>
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
