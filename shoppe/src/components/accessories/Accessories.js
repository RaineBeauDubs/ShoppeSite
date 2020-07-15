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
      <p>Shoes - ladies sizes 5 to 12</p>
      <p>Jewelry - consigned, locally-made, vintage, etc.</p>
      <p>Purses - both fashion and popular brands such as Coach, and Vera Bradley</p>
      <p>Galleria Umbrellas - twenty to thirty styles including those pictured below</p>
    </div>
  );
}

export default Accessories;
