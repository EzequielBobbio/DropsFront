import React from "react";
import "./Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="bar">
          <Container className="letter-col">
            <Row>
              <Col xs={7}>
                <div className='whatsapp-contact-text'>
                  Contáctanos a través de:
                </div>
                <div className='social-media-name whatsapp-color'>
                  WhatsApp
                </div>
                <a
                  class="whatsappcontact"
                  href="https://wa.me/5491130873144?text=Hola%2C%20quer%C3%ADa%20preguntar%20sobre..."
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp />
                </a>
                <div className='social-media-name facebook-color'>
                  Facebook
                </div>
                <a
                  class="facebook-color"
                  href="https://wa.me/5491130873144?text=Hola%2C%20quer%C3%ADa%20preguntar%20sobre..."
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <div className='social-media-name instagram-color'>
                  Instagram
                </div>
                <a
                  class="instagram-color"
                  href="https://wa.me/5491130873144?text=Hola%2C%20quer%C3%ADa%20preguntar%20sobre..."
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </Col>
              <Col>
                <Row>
                  <Col className='email-padding'>
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="comment-position">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Comentario
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                    ></textarea>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button type="submit" className="form-button">
                      Enviar
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Contact;
