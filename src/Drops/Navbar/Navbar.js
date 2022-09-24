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
          {/* 
          <div>
            <nav>
                <a href="#/" className="nav-link">Inicio</a>
                <a href="#/" className="nav-link">Pami</a>
                <a href="#/" className="nav-link">Belleza</a>
                <a href="#/" className="nav-link">Cuidado Personal</a>
                <a href="#/" className="nav-link">Salud y Farmacia</a>
            </nav>
          </div> */}
          {/* <ul className="nav nav-pills">
            <li className="nav-item" >
              <a className="nav-link active" aria-current="page" href="'#'">INICIO</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="'#'" role="button" 
              aria-expanded="false">PRODUCTOS</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="'#'">Belleza</a></li>
                <li><a className="dropdown-item" href="'#'">Cuidado Personal</a></li>
                <li><a className="dropdown-item" href="'#'">Salud y Farmacia</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="'#'">Pami</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="'#'">LOS + VENDIDOS</a>
            </li> */}
         {/* </ul> */}
          <nav class="navbar fixed-top navbar-dark bg-dark navbar-nav-scroll">
            <div class="container-fluid ">
               <a href="#/" className="logo">
              <img src={logo} alt="logo de la empresa"/>
            </a>
              <a className="navbar-brand" href="'#'">INICIO</a>
              <a className="navbar-brand" href="'#'">BELLEZA</a>
              <a className="navbar-brand" href="'#'">CUIDADO PERSONAL</a>
              <a className="navbar-brand" href="'#'">PAMI</a>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
  
  export default Navbar; 