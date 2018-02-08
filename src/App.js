import React, { Component } from 'react';
import './App.css';
import './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-intro">
          Hi, I'm John Castillo <br/>
          Front-End developer & Tech enthusiast<br/>
           from Bronxville, NY.
        </h1>

        <div class='nav-bar'>
            <span class="contact-link contact-link-email">
            <a href="mailto:johnluiscastillo@gmail.com">Email</a>
            </span>
            <span class="contact-link contact-link-linkedin">
            <a href="https://www.linkedin.com/in/john-castillo-604b2b156/">LinkedIn</a>
            </span>
            <span class="contact-link contact-link-github">
            <a href="https://github.com/JohnLCastillo">GitHub</a>
            </span>
        </div>
        <Mouse/>
      </div>
    );
  }
}

export default App;
