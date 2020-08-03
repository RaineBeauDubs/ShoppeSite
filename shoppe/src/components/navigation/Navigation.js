import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="navBar">
      <h1>Rainy Day Resale</h1>
      <div className="nav">
        <NavLink activeClassName="activeNavLink" className="navLink" to="/" exact>
          <h3>Home</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/ladies">
          <h3>Ladies</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/juniors">
          <h3>Juniors</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/accessories">
          <h3>Accessories</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/studio">
          <h3>Studio</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/consignors">
          <h3>Consignors</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/contact">
          <h3>Contact Us</h3>
        </NavLink>
        <NavLink activeClassName="activeNavLink" className="navLink" to="/community">
          <h3>Community</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation;