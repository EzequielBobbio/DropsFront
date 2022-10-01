import React from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";

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
          <div class="mb-3 form-position">
            <label for="exampleFormControlInput1" class="form-label" className='letter-color'>
              Email
            </label>
            <input
              type="email"
              class="form-control form-size"
              id="exampleFormControlInput1"
              placeholder="nombre@ejemplo.com"
            />
          </div>
          <div class="mb-3 form-position">
            <label for="exampleFormControlTextarea1" class="form-label" className='letter-color'>
                Motivo de consulta
            </label>
            <div className='form-size1'>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea> 
            </div>
            <button type='submit' className='form-button'>Enviar</button>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
