import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import FormTemplate from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Resume Generator"/>
        <FormTemplate />
      </div>
    );
  }
}

export default App;
