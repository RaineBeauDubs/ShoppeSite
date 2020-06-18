import React from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <img className="trainPic" src="/images/RDRGoodTrainPic.png" alt="Trains run through Main Street an average of 30 times a day!" />
      <h1 className="colorHeader">Rainy Day Resale</h1>
      <p>WE ARE REOPENED AND DOING OUR BEST TO KEEP YOU SAFE WHILE SHOPPING!</p>
      <p>PLEASE COME SEE US SOON!</p>
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
      <p>Come check out our amazing selection of misses, plus-size and juniors clothing and accessories.<br/>We offer fabulous prices on the brands you love! New items arriving daily.</p>
    </div>
  );
}

export default App;
