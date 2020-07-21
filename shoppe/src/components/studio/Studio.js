import React from 'react';
import './studio.css';

function Studio() {
  return (
    <div className="studioContainer">
      <h2 className="colorHeader">Utopia Studio</h2>
      <h3 className="colorSubHeader">Everyone Can Paint!</h3>
      <img
        className="stuPicWide"
        src="/images/StuPicWide1.png"
        alt="Super fun painting party"
      />
      <div className="stuFlex">
        <img
          className="stuPicTall"
          src="/images/StuPicTall1.jpg"
          alt="Super fun painting party"
        />
        <p>Call or text (502) 758-0425 for more info or to book an event for Karen Leightty's fine art, sign up for private art classes, schedule a painting party, or arrange a professional photography session.</p>
        <img
          className="stuPicTall"
          src="/images/StuPicTall2.jpg"
          alt="Super fun painting party"
        />
      </div>
      <img
        className="stuPicWide"
        src="/images/StuPicWide2.jpg"
        alt="Super fun painting party"
      />
    </div>
  );
}

export default Studio;
