import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNavigation from './HeaderNavigation';
import News from './News';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderNavigation />
        <div className="App-header">
          <h2>Code<br/>Love<br/>Code</h2>
          <svg width="100" height="100">
             <circle cx="50" cy="50" r="40" stroke="white" stroke-width="4" fill="white" />
             //replace this with a circle graphic
          </svg> 
        </div>
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
