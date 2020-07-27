import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contactContainer">
      <h2 className="colorHeader">Get In Touch!</h2>
      <h3 className="colorSubHeader">Come find us at:</h3>
      <p>102 East Main Street</p>
      <p>LaGrange, KY 40031</p>
      <img
        className="fakeMap"
        src="/images/ConPlaceholderMap.png"
        alt="Where we're located in LaGrange"
      />
      <h3 className="colorSubHeader">Questions? Call us at:</h3>
      <p>(502) 222-2225</p>
      <h3 className="colorSubHeader">Send us an email:</h3>
      <p>RainyDayResale@gmail.com</p>
    </div>
  );
}

export default Contact;
