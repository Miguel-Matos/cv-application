import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import FormTemplate from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Easy Resumes"/>
        <FormTemplate />
      </div>
    );
  }
}

export default App;
