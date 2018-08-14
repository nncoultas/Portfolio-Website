import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
