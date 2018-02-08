import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav-bar';
import Slick from './components/slick';
import Mouse from './components/mouse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-intro">
          Hi, I'm John Castillo <br/>
          Front-End developer & Tech enthusiast<br/>
           from Bronxville, NY.
        </h1>
        <Slick/>
        <Nav/>
        <Mouse/>
      </div>
    );
  }
}

export default App;
