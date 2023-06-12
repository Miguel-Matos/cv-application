import React, { Component } from 'react';
import DropDown from './Date';

class History extends Component {
  constructor (props) {
    super (props)
    this.state = {
      school: ['Test']
    }
  }

  render () {
    return (
      <div>
        <label htmlFor='location'>{this.props.location} Name: </label>
        <input id='location' type='text' placeholder='University of Florida'></input>
        <DropDown />
        <DropDown />
        <input id='current' type='checkbox'/><label htmlFor='current'>Currently Here</label>
      </div>

    )
  }
}

export default History;