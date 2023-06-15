import React, { Component } from 'react';
import Info from './Info';
import HisGen from './HisGen';
import Resume from './Resume';

class FormTemplate extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <>
      <form>
        <Info />
        <h3>Educational History</h3>
      <HisGen />
      </form>

      <Resume />
      </>
    )
  }
}

export default FormTemplate;