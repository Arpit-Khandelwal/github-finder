import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {


  render() {

    const title = 'Github Finder';

    return (
      <div className="App">
        
        <Navbar />
      </div>
    );
  }
}

export default App;
