import React, { Component } from 'react';
import Logo from './components/logo';
import Sheep from './components/sheep';
import Loader from './components/loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Logo />
          <Sheep />
        </header>
      </div>
    );
  }
}

export default App;
