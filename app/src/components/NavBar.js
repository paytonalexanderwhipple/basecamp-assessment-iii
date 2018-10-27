import "./style.css";
import React, { Component } from 'react';
import NavLink from 'react-router-dom/Link'

function activeCheck(loc) {
  var currentLocation = window.location.toString();
  if (currentLocation.indexOf(loc) >= 0){
    return "active"
  } else {
    return "inactive"
  }
}

class NavBar extends Component {
  render () {
    return (
      <div className="navBar">
          <ul>
              <li className={activeCheck("library")}><NavLink to="/library">Library</NavLink></li>
              <li className={activeCheck("home")}><NavLink to="/home">Home</NavLink></li>
          </ul>
        <div id="map"><p>D&D</p></div>
      </div>
    );
  };
};

export default NavBar
