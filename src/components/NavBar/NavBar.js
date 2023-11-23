
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../img/pngegg.png'
const NavBar = () => {
  
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
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={"/category/sahumerios"} >sahumerios</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={"/category/bombitas"}>bombitas</NavLink>
                </li>
            
                </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link" to="">Contactanos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link" to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default NavBar;