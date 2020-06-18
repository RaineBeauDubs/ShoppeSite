import React from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  faUmbrella
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="homeContainer">
        <img className="trainPic" src="/images/RDRGoodTrainPic.png" alt="Trains run through Main Street an average of 30 times a day!" />
        <h1 className="colorHeader">Rainy Day Resale</h1>
        <div className="alertBox">
          <p className="alert">We are reopened and doing our best to keep you safe while shopping!</p>
          <p className="alert">Please come see us soon, we've missed you!</p>
        </div>
        <div className="hours">
          <p>HOURS:</p>
          <ul>
            <li>Sunday - 12pm to 4pm</li>
            <li>Monday - 10am to 6pm</li>
            <li>Tuesday - 10am to 6pm</li>
            <li>Wednesday - 10am to 6pm</li>
            <li>Thursday - 10am to 6pm</li>
            <li>Friday - 10am to 6pm</li>
            <li>Saturday - 10am to 6pm</li>
          </ul>
        </div>
        <p>Come check out our amazing selection of misses, plus-size and juniors clothing and accessories.</p>
        <p>We offer fabulous prices on the brands you love! New items arriving daily.</p>
        <div className="facebook">
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
          <a href="https://www.facebook.com/RainyDayResale">Come check us out on Facebook!</a>
          <FontAwesomeIcon className="icon" icon={faUmbrella} />
        </div>
        <img className="umbPic" src="/images/RDRUmbrellas.png" alt="A few of our gorgeous Galleria Umbrellas!" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
