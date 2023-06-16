import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      bio: ''
    }
    this.updateFName = this.updateFName.bind(this);
    this.updateLName = this.updateLName.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateBio = this.updateBio.bind(this);
  }

  updateFName(e) {
    this.setState(
      {fname: e.target.value}
    )
  }

  updateLName(e) {
    this.setState({
      lname: e.target.value
    })
  }

  updatePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  updateBio(e) {
    this.setState({
      bio: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input onChange={this.updateFName} value={this.state.fname} id="fname" type='text' placeholder='John' required></input>
        </div>
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input onChange={this.updateLName} value={this.state.lname} id='lname' type='text' placeholder='Smith' required></input>
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input onChange={this.updatePhone} value={this.state.phone} id='phone' type='tel' placeholder='352-867-5309' required></input>
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input onChange={this.updateEmail} value={this.state.email} id="email" type='email' placeholder='jsmith@gmail.com'></input>
        </div>
        <div>
          <label htmlFor='about'>About You: </label>
          <textarea onChange={this.updateBio} value={this.state.bio} id="about"></textarea>
        </div>
      </div>
    )
  }
}

export default Info;