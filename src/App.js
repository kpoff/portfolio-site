import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </div>
    );
  }
}

export default App;
