import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Blog" component={Blog} />
      </div>
    );
  }
}

export default App;
