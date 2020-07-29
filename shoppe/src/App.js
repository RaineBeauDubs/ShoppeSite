import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Ladies from './components/ladies/Ladies';
import Juniors from './components/juniors/Juniors';
import Accessories from './components/accessories/Accessories';
import Studio from './components/studio/Studio';
import Consignors from './components/consignors/Consignors';
import Community from './components/community/Community';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navContainer">
        <Navigation />
      </div>
      <div className="navSpace"></div>
      <Route
        path="/"
        component={Home}
        exact
      />
      <Route
        path="/ladies"
        component={Ladies}
      />
      <Route
        path="/juniors"
        component={Juniors}
      />
      <Route
        path="/accessories"
        component={Accessories}
      />
      <Route
        path="/studio"
        component={Studio}
      />
      <Route
        path="/consignors"
        component={Consignors}
      />
      <Route
        path="/community"
        component={Community}
      />
      <Route
        path="/contact"
        component={Contact}
      />
      <Footer />
    </div>
  );
}

export default App;
