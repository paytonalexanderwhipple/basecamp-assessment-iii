import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import PDF from './components/Library.js'


class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Redirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/library" component={PDF} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
