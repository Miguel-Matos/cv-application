import React, { Component } from 'react';
import DropDown from './Date';

class History extends Component {
  constructor (props) {
    super (props)
    this.state = {
      location: '',
      from: '',
      to: ''
    }
    this.setLocation = this.setLocation.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setTo = this.setTo.bind(this);
  }

  setLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  setFrom(e) {
    this.setState({
      from: e
    })
  }

  setTo(e) {
    this.setState({
      to: e.target.value
    })
  }

  render () {
    return (
      <div>
        <label htmlFor='location'>{this.props.location} Name: </label>
        <input onChange={this.setLocation} id='location' type='text' placeholder='University of Florida'></input>
        <DropDown onSelectDate={this.setFrom} />
        <DropDown onChange={this.setTo} />
        <input id='current' type='checkbox'/><label htmlFor='current'>Current</label>

        <p>{this.state.location} {this.state.from} {this.state.to}</p>
      </div>

    )
  }
}

export default History;