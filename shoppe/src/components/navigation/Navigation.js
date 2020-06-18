import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="navBar">
      <h1>Rainy Day Resale</h1>
      <div className="nav">
        <NavLink className="navLink" to="/">
          <h3>Ladies</h3>
        </NavLink>
        <NavLink className="navLink" to="/">
          <h3>Juniors</h3>
        </NavLink>
        <NavLink className="navLink" to="/">
          <h3>Accessories</h3>
        </NavLink>
        <NavLink className="navLink" to="/">
          <h3>Consignors</h3>
        </NavLink>
        <NavLink className="navLink" to="/">
          <h3>Contact Us</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation;