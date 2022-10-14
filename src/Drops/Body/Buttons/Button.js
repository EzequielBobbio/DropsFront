import React from "react";
import "./Button.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="bar2">
          <Container>
            <Row>
              <Col xs={6} className='position-btn1'>
                <button type="button" class="btn btn-size1">
                  Pedí tus medicamentos y retiralos por la farmacia!
                </button>
              </Col>
              <Col>
                <Row>
                  <Col className='position-btn2'>
                    <button type="button" class="btn btn-size2">
                      Mis pedidos
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

export default Button;
