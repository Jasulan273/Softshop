import React from 'react'
import './Navbar.css'
import logo from '../../../assets/Logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <h1> <Link to="/">Ugmonk</Link></h1>
            <img src={logo} alt="" />
          </div>
          <div className="nav_links">
            <Link to="/men" className="link">Men</Link>
            <Link to="/women" className="link">Women</Link>
            <Link to="/catalog" className="link">Catalog</Link>
            <Link to="/analog" className="link">Analog</Link>
          </div>
          <div className="auth">
            <a href="" className="login">Login</a>
            <a href="" className="shop">
              <box-icon name='shopping-bag' className="shop_icon"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar