import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <ul>
          <li>Sunday - 12pm to 4pm</li>
          <li>Monday - 10am to 6pm</li>
          <li>Tuesday - 10am to 6pm</li>
          <li>Wednesday - 10am to 6pm</li>
          <li>Thursday - 10am to 6pm</li>
          <li>Friday - 10am to 6pm</li>
          <li>Saturday - 10am to 6pm</li>
        </ul>
      </div>
      <div className="footerCenter">
      <img className="logo" src="/images/RDRLogo.png" alt="Rainy Day Resale" />
      </div>
      <div className="footerRight">
        <p>Rainy Day Resale</p>
        <p>102 East Main Street</p>
        <p>La Grange, KY 40031</p>
        <p>(502) 222-2225</p>
      </div>
    </div>
  )
}

export default Footer;