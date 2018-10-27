import React, { Component } from 'react';
import logo from './images/d20-blue.png';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="text">
          <p>
            Welcome Aspireing Grognards!
          </p>
          <img src={logo} alt="logo" />
          <p>
            Learn To Game
          </p>
      </div>
    );
  }
}

export default Home;
