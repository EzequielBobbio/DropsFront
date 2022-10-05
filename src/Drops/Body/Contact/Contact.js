import React from "react";
import "./Contact.css";
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
          <a
            class="whatsappcontact"
            href="https://wa.me/5491130873144?text=Hola%2C%20quer%C3%ADa%20preguntar%20sobre..."
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
          <Container className="letter-col">
            <Row>
              <Col xs={7}>1 of 3</Col>
              <Col>
                <Row>
                  <Col>
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
                  <Col className='comment-position'>
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
