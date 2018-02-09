import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav-bar';
import Slick from './components/slick';


class App extends Component {
  render() {
    return (
      <div className="App">
      <section className='first-page'>
        <h1 className="App-intro">
          Hi, I'm John Castillo <br/>
          Front-End developer & Tech enthusiast<br/>
           from Westchester County, NY.
        </h1>
        <Nav/>
        <img className='img1' src='https://www.clker.com/cliparts/c/d/8/2/12422411301076764824Down_arrow.svg' height="42" width="42"/> 
      </section>
      <section className='second-page'>
          <h2>Past Projects</h2>
          <Slick/>
          <img className='img2' src='https://www.clker.com/cliparts/c/d/8/2/12422411301076764824Down_arrow.svg' height="42" width="42"/> 
      </section>
      <section className='third-page'>
        <h2>I specialize in</h2>
        <div className='img-container'>
          <img src='http://www.thulirsolutions.com/web/images/nodejs.png' height="142" width="182"/>
          <img src='http://www.unixstickers.com/image/data/stickers/react/badge/React-JS.sh.png' height="242" width="182"/>
          <img src='https://www.acuitytraining.co.uk/wp-content/uploads/2015/05/SQL-logo-transparent.png' height="142" width="182"/>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
