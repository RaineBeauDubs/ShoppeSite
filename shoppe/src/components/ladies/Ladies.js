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
          <img className="lWidePic" src="/images/LPicWide.png" alt="Our ladies section is guaranteed to have pieces you'll love!" />
        </div>
        <div className="ladiesFlexRight">
          <p className="ladiesDesc">Our ladies sizes run from X-Small through 3X and sometimes larger, depending on what we get in. We carry all of your favorite ladies brands including Chicos, Land's End, White House Black Market, Coldwater Creek, Lane Bryant, Talbots, and many more!</p>
          <img className="lTallPic" src="/images/LPicTall.png" alt="Our ladies section is guaranteed to have pieces you'll love!" />
        </div>
      </div>
    </div>
  );
}

export default Ladies;
