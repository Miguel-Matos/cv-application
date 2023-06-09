import React, { Component } from 'react';
import DropDown from './Date';

class History extends Component {
  constructor (props) {
    super (props)
    this.state = {
      location: '',
      from: '',
      to: '',
      current: false
    }
    this.setLocation = this.setLocation.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setTo = this.setTo.bind(this);
    this.current = this.current.bind(this);
    this.passUp = this.passUp.bind(this);
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
      to: e
    }
    , () => {
      console.log(this.state)
      // this.props.onEdit([this.state.location, this.state.from, this.state.to])
    }
    )
  }

  current() {
    this.setState({
      current: !this.state.current
    }, () => {
      console.log(this.state.current)
    })
  }

  passUp() {
    return this.props.onEdit([this.state.location, this.state.from, this.state.to])
  }

  render () {
    return (
      <div>
        <label htmlFor='location'>{this.props.location} Name: </label>
        <input onChange={this.setLocation} id='location' type='text' placeholder='University of Florida'></input>
        <DropDown onSelectDate={this.setFrom} />
        <p>-</p>
        <DropDown disabled={this.state.current} onSelectDate={this.setTo} />
        <input onChange={this.current} id='current' type='checkbox'/><label htmlFor='current'> Current</label>
        <button onClick={this.passUp}>Finished</button>
        {/* <p>{this.state.location} {this.state.from}</p>
        
        {this.state.current === true ? <p>Current</p> : <p>{this.state.to}</p>} */}
      </div>

    )
  }
}

export default History;