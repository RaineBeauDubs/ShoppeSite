import React from 'react';
import './community.css';

function Community() {
  return (
    <div className="communityContainer">
      <h2 className="colorHeader">Community</h2>
      <h3 className="colorSubHeader">Make sure to check out all these other awesome places in our town!</h3>
      <div className="comTopFlexCont">
        <div className="comTopFlexSec">
          <img
            className="comTopFlexPic"
            src="/images/ComDowntownBarber.jpg"
            alt="Downtown Barber is open for business!"
          />
          <p className="comTopFlexDesc">Downtown Barber is located at 107 North First Street and can also be accessed from Main Street through Rainy Day Resale.<br />Fantastic, experienced barbers can be found here, performing their hair magic on all!<br /><br />
            <a 
              href="https://www.facebook.com/DowntownBarberKY" 
              target="_blank" 
              className="comFBLink">
                Check them out on Facebook here!
            </a></p>
        </div>
        <div className="comTopFlexSec">
          <p className="comTopFlexDesc">La Grange Farmers' Market & Artisans is a Kentucky Proud market and a La Grange Kentucky Main Street Event.<br />Open on the courthouse lawn (100 West Main Street) from 9AM to 1PM on Saturdays during Farmers' Market season!<br /><br />
            <a 
              href="https://www.facebook.com/lagrangefarmersmkt" 
              target="_blank" 
              className="comFBLink">
                Check them out on Facebook here!
            </a></p>
          <img
            className="comTopFlexPic"
            src="/images/ComLGFMPoster.png"
            alt="La Grange Farmers' Market Poster by Stephen Winter"
          />
        </div>
      </div>
      {/* Link to LG Main Street page
      https://www.lagrangemainstreet.org/
      add images
      link to barber shop social media (make quick bbs site?)
      
      link to main street social media 
      https://www.facebook.com/LaGrangeKYMainStreetProgram
      https://www.facebook.com/lagrangefarmersmkt
      https://www.facebook.com/places/Things-to-do-in-La-Grange-Kentucky/109376089080334
      Maybe yearly events? */}
    </div>
  );
}

export default Community;
