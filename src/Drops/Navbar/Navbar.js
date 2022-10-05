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
          <nav class="navbar fixed-top navbar-dark bg-dark navbar-nav-scroll">
            <div class="container-fluid ">
               <a href="#/" className="logo">
              <img src={logo} alt="logo de la empresa"/>
            </a>
              <a className="navbar-brand letter-navbar" href="'#'">INICIO</a>
              <a className="navbar-brand letter-navbar" href="'#'">BELLEZA</a>
              <a className="navbar-brand letter-navbar" href="'#'">CUIDADO PERSONAL</a>
              <a className="navbar-brand letter-navbar" href="'#'">PAMI</a>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
  
  export default Navbar; 