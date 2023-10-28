
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarWidget from './CarWidget'
import logo from '../img/pngegg.png'
const NavBar = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="index.html">
          <img src={logo} width="30" height="30" alt="" className="img-logo-nav" />
        </a>
        <Link className="navbar-brand nav-link" to="/">DHARMA</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Productos
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryChange("sahumerios")}
                  >
                    Sahumerios
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryChange('bombitas')}
                  >
                    Bombitas
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryChange('otros')}
                  >
                    Otros
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryChange('Todos')}
                  >
                    Todos
                  </button>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link" to="">Contactanos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link" to="/cart">
                <CarWidget />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBar;