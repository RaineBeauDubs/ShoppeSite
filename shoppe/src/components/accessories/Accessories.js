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
        <p>- consigned, locally-made, vintage, we've got it all!</p>
      </div>
      <div className="accDesc">
        <h3 className="accTitle">Shoes</h3>
        <p>- ladies sizes 5 to 12 in all the brands you love!</p>
      </div>
      <div className="accDesc">
        <h3 className="accTitle">Purses</h3>
        <p>- both fashion and popular brands such as Coach, and Vera Bradley</p>
      </div>
      <div className="accDesc">
        <h3 className="accTitle">Galleria Umbrellas</h3>
        <p>- gorgeous, sturdy, collapsable (or inverted!) umbrellas from Galleria</p>
      </div>
    </div>
  );
}

export default Accessories;
