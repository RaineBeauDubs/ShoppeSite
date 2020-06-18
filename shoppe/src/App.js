import React from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <img className="trainPic" src="/images/RDRGoodTrainPic.png" alt="Trains run through Main Street an average of 30 times a day!" />
    </div>
  );
}

export default App;
