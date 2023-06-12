import React, { Component } from 'react';
import History from './History';
import Info from './Info';

class FormTemplate extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <form>
        <Info />
        <h3>Educational History</h3>
      <History location='School'/>
      </form>
    )
  }
}

export default FormTemplate;