import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';
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
      <div className="navContainer">
        <Navigation />
      </div>
      <Route 
        path="/"
        component={Home}
        exact
      />
      <Footer />
    </div>
  );
}

export default App;
