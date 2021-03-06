import React from 'react';
import './accessories.css';

function Accessories() {
  return (
    <div className="accessoriesContainer">
      <h2 className="colorHeader">Accessories</h2>
      <div className="jewelryImgCont">
        <img
          className="jwlPic"
          src="/images/AccPic1.jpg"
          alt="A sample of our jewelry"
        />
        <img
          className="jwlPic"
          src="/images/AccPic2.jpg"
          alt="A sample of our jewelry"
        />
        <img
          className="jwlPic"
          src="/images/AccPic3.jpg"
          alt="A sample of our jewelry"
        />
      </div>
      <div className="accDesc">
        <h3 className="accTitle">Jewelry</h3>
        <p>- consigned, locally-made, vintage, we've got it all</p>
      </div>
      <div className="shoesFlexCont">
      <div className="accFlexDesc centerFlex">
        <h3 className="accTitle">Shoes</h3>
        <p>- casual, dress, athletic, unique, seasonal, ladies sizes 5 to 12 in all the brands you love <br/> </p>
      </div>
      <img
          className="shoePic"
          src="/images/AccShoes.png"
          alt="Just a small sample of our huge shoe selection!"
        />
      <div className="accFlexDesc centerFlex">
        <h3 className="accTitle">Purses</h3>
        <p>- glam, fashion, brand-name such as Coach, Vera Bradley, Dooney & Bourke, Kate Spade</p>
      </div>
      </div>
      <div className="accDesc">
        <h3 className="accTitle">Galleria Umbrellas</h3>
        <p>- gorgeous, sturdy, collapsable (or inverted!) umbrellas from Galleria, 20 to 30 styles in stock</p>
      </div>
      <div className="jewelryImgCont">
      <img
          className="umbPic"
          src="/images/AccUmb5.png"
          alt="A gorgeous Galleria Umbrella"
        />
        <img
          className="umbPic"
          src="/images/AccUmb4.png"
          alt="A gorgeous Galleria Umbrella"
        />
        <img
          className="umbPic"
          src="/images/AccUmb1.png"
          alt="A gorgeous Galleria Umbrella"
        />
        <img
          className="umbPic"
          src="/images/AccUmb2.png"
          alt="A gorgeous Galleria Umbrella"
        />
        <img
          className="umbPic"
          src="/images/AccUmb3.png"
          alt="A gorgeous Galleria Umbrella"
        />
      </div>
    </div>
  );
}

export default Accessories;
