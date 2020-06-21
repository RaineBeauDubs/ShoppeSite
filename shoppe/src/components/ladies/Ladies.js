import React from 'react';
import './ladies.css';

function Ladies() {
  return (
    <div className="ladiesContainer">
      <h2 className="colorHeader">Ladies</h2>
      <div className="ladiesFlexContainer">
        <div className="ladiesFlexLeft">
          <img 
            className="logoLeft brandLogo" 
            src="/images/LLogoChicos.png" 
            alt="Chicos" 
          />
          <img 
            className="logoRight brandLogo" 
            src="/images/LLogoColdCreek.png" 
            alt="ColdwaterCreek" 
          />
          <img 
            className="logoLeft brandLogo" 
            src="/images/LLogoLane.png" 
            alt="Lane Bryant" 
          />
          <img 
            className="logoRight brandLogo" 
            src="/images/LLogoLilly.png" 
            alt="Lilly Pulitzer" 
          />
          <img 
            className="logoLeft brandLogo" 
            src="/images/LLogoTalbots.png" 
            alt="Talbots" 
          />
          <img 
            className="logoRight brandLogo" 
            src="/images/LLogoTorrid.png" 
            alt="Torrid"
          />
          <img 
            className="logoLeft brandLogo" 
            src="/images/LLogoWHBM.png" 
            alt="White House | Black Market" 
          />
        </div>
        <div className="ladiesFlexRight">
          <p>Our ladies sizes run from x-small to 3x and sometimes larger, depending on what we get in. We carry popular ladies brands including Chicos, Land's End, White House Black Market, Coldwater Creek, Lane Bryant, Talbots, and many more!</p>
        </div>
      </div>
    </div>
  );
}

export default Ladies;
