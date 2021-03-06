import React from 'react';
import './community.css';

function Community() {
  return (
    <div className="communityContainer">
      <h2 className="colorHeader" id="comColHeader">Community</h2>
      <h3 className="colorSubHeader" id="comColSubHeader">Make sure to check out all these other awesome places in our town!</h3>
      <div className="comTopFlexCont">
        <div className="comTopFlexSec">
          <img
            className="comTopFlexPic"
            src="/images/ComDowntownBarber.jpg"
            alt="Downtown Barber is open for business!"
          />
          <div className="comTopFlexDesc">
            <p>Downtown Barber is located at 107 North First Street and can also be accessed from Main Street through Rainy Day Resale.<br />Fantastic, experienced barbers can be found here, performing their hair magic on all!<br /><br /></p>
            <a
              href="https://www.facebook.com/DowntownBarberKY"
              className="comFBLink">
              Check them out on Facebook here!
            </a>
          </div>
        </div>
        <div className="comTopFlexSec">
          <div className="comTopFlexDesc">
            <p>La Grange Farmers' Market & Artisans is a Kentucky Proud market and a La Grange Kentucky Main Street Event.<br />Open on the courthouse lawn (100 West Main Street) from 9AM to 1PM on Saturdays during Farmers' Market season!<br /><br /></p>
            <a
              href="https://www.facebook.com/lagrangefarmersmkt"
              className="comFBLink">
              Check them out on Facebook here!
            </a>
          </div>
          <img
            className="comTopFlexPic"
            src="/images/ComLGFMPoster.png"
            alt="La Grange Farmers' Market Poster by Stephen Winter"
          />
        </div>
        <div className="comTopFlexSec">
          <img
            className="comTopFlexPic"
            src="/images/ComUtopia.png"
            alt="La Grange Farmers' Market Poster by Stephen Winter"
          />
          <div className="comTopFlexDesc">
            <p> Utopia Studio: Call or text (502) 758-0425 for more info or to book an event for Karen Leightty's fine art, sign up for private art classes, schedule a painting party, or arrange a professional photography session.<br /><br /></p>
            <a
              href="https://www.facebook.com/utopiastudiollc"
              className="comFBLink">
              Check them out on Facebook here!
            </a>
          </div>
        </div>
        <div className="comTopFlexSec">
          <div className="comTopFlexDesc">
            <p>You can learn all about haunted La Grange on this 2-hour candlelit walking tour. Proceeds fund the Facade Grant Program of La Grange, KY, helping to preserve historic buildings in town.<br />Due to the potential spirit activity, all 100% genuine, tours are not recommended for children under 12.<br /><br /></p>
            <a
              href="https://www.lagrangemainstreet.org/spirits-of-lagrange-ghost-tour.html"
              className="comFBLink">
              Check out their website here!
            </a>
          </div>
          <img
            className="comTopFlexPic"
            src="/images/ComGhostTours.png"
            alt="La Grange Farmers' Market Poster by Stephen Winter"
          />
        </div>
      </div>
      <div className="comBottomCont">
        <img
          className="comBottomPic"
          src="/images/ComLGMSHeader.png"
          alt="La Grange Street information"
        />
        <div>
          <img
            className="comBottomPic"
            src="/images/ComLGMSShopping.png"
            alt="La Grange Street information"
          />
          <img
            className="comBottomPic"
            src="/images/ComLGMSArts.png"
            alt="La Grange Street information"
          />
        </div>
        <div>
          <img
            className="comBottomPic"
            src="/images/ComLGMSDining.png"
            alt="La Grange Street information"
          />
          <img
            className="comBottomPic"
            src="/images/ComLGMSSpa.png"
            alt="La Grange Street information"
          />
        </div>
        <img
          className="comBottomPic"
          src="/images/ComLGMSMap.png"
          alt="La Grange Street information"
        />
        <a
          href="https://www.lagrangemainstreet.org/"
          className="comFBLink">
          Check out the La Grange, KY Main Street Program website here!
        </a>
      </div>
    </div>
  );
}

export default Community;
