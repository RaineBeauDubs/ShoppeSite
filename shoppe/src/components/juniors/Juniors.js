import React from 'react';
import './juniors.css';

function Juniors() {
  return (
    <div className="juniorsContainer">
      <h2 className="colorHeader">Juniors</h2>
      <div className="jrBrands">
        <img
          className="brandLogo"
          src="/images/JrLogoAbercrombie.png"
          alt="Abercrombie"
        />
        <img
          className="brandLogo"
          src="/images/JrLogoAE.png"
          alt="Amrican Eagle"
        />
        <img
          className="brandLogo"
          src="/images/JrLogoF21.png"
          alt="Forever21"
        />
        <img
          className="brandLogo"
          src="/images/JrLogoHM.png"
          alt="H&M"
        />
      </div>
      <div className="jrMid">
        <img
          className="jrImg"
          src="/images/JrPicTall1.png"
          alt="One of our junior mannequins"
        />
        <div className="jrMidText">
          <p>For Juniors, we offer brands such as Abercrombie, Victoria's Secret, Hollister, Juicy Couture, Lucky Brand, and Wet Seal. We have a great selection of jeans and t-shirts as well as summer dresses, shorts, tanks, etc. </p>
        </div>
        <img
          className="jrImg"
          src="/images/JrPicTall2.png"
          alt="Our shorts section in Juniors"
        />
      </div>
      <div className="jrBrands">
        <img
          className="brandLogo"
          src="/images/JrLogoHollister.png"
          alt="Hollister"
        />
        <img
          className="brandLogo"
          src="/images/JrLogoPink.png"
          alt="Pink"
        /
        ><img
          className="brandLogo"
          src="/images/JrLogoRue21.png"
          alt="Rue21"
        />
        <img
          className="brandLogo"
          src="/images/JrLogoWetSeal.png"
          alt="Wet Seal"
        />
      </div>
    </div>
  );
}

export default Juniors;
