import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import HeaderNavigation from './HeaderNavigation';
import News from './News';
import Events from './Events';
import Footer from './Footer';

class App extends Component {
  state = {
    title: 'News',
    show: true
   };

  render() {
    var showTitle;
    if (this.state.show){
      showTitle = 'i can see clearly now the rain is gone';
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Code<br/>Love<br/>Code</h2>
          <svg width="100" height="100">
             <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="white" />
             //replace this with a circle graphic
          </svg>
        </div>
        <div className="pageHeader">
          { showTitle }
        </div>
        <News />
        <Events />
        <HeaderNavigation />
        <Footer />
      </div>
    );
  }
}

export default App;
