import "./Drops-Cards.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container-drops-card">
          <div className="limit-container">
            <h2 class="h2-visual">Tarjeta de membresía Drops</h2>
          </div>
          <Container>
            <Row>
              <Col xs={7}>1 of 3</Col>
              <Col>
                <Row>
                  <Col>
                    <li>¡Juntá puntos con cada compra que hacés!</li>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <li>Beneficios y descuentos todos los meses</li>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <li>
                      ¡Participá en sorteos mensuales de productos de cosmética
                      y belleza!
                    </li>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <ul></ul>
        </div>
      </>
    );
  }
}

export default Cards;
