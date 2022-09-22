import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'

class Navbar extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {};
    }
  
  render() {
    return (
      <>
        <header>
          <a href="#/" className="logo">
              <img src={logo} alt="logo de la empresa"/>
          </a>
          <div>
            <nav>
                <a href="#/" className="nav-link">Inicio</a>
                <a href="#/" className="nav-link">Pami</a>
                <a href="#/" className="nav-link">Belleza</a>
                <a href="#/" className="nav-link">Cuidado Personal</a>
                <a href="#/" className="nav-link">Salud y Farmacia</a>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
  
  export default Navbar; 