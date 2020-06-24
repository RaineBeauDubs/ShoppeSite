import React from 'react';
import './consignors.css';

function Consignors() {
  return (
    <div className="consignorsContainer">
      <h2 className="colorHeader">Interested In Consigning With Us?</h2>
      <div className="consFlex">
        <div className="consInfo">
          <h3 className="colorSubHeading">Our contract has changed!</h3>
          <p>We no longer allow return pick-ups after your appointment or drop-off.</p>
          <p>We are not accepting walk-ins at this time! You MUST call and schedule an appointment or get approval to drop off!</p>
          <p>We are currently only taking Ladies, Juniors, and accessory items on consignment. </p>
          <h3 className="colorSubHeading">Clothing Item Limit:</h3>
          <p>You may bring in up to 30 clothing items per scheduled appointment</p>
          <p>Please bring them in on hangers or NEATLY folded in a box, tub, or sack</p>
          <p>DO NOT bring clothing in grocery or garbage bags</p>
          <p>No limit on shoes, purses, jewelry, or accessories</p>
          <h3 className="colorSubHeading">Clothing items must be name-brand, freshly laundered, in-style, in-season, and in excellent condition!</h3>
          <p>No pilling, holes, odors, or missing items (such as tags, buttons, clasps, etc.)</p>
          <p>We use a 60-day contract with a 50/50 split</p>
          <p>PLUS you get 10% off of your purchase when you use your consignor credit in-store!!</p>
        </div>
        <div className="consPDF">
          <div className="PDFBox">
            <img
              className="PDFImg"
              src="/images/ConsPDFImgLetter.png"
              alt="RDR Consignor Letter"
            />
            <p>Letter to Consignors (PDF)</p>
          </div>
          <div className="PDFBox">
            <img
              className="PDFImg"
              src="/images/ConsPDFImgContract.png"
              alt="RDR Consignor Contract"
            />
            <p>Consignor Contract (PDF)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consignors;
