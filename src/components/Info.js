import React, { Component } from 'react';
import Btn from './Button';

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      bio: '',
      edit: false,
      hidden: true

    }
    this.updateFName = this.updateFName.bind(this);
    this.updateLName = this.updateLName.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.updateButton = this.updateButton.bind(this);
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

  updateButton() {
    this.setState({
      hidden: !this.state.hidden,
      edit: !this.state.edit
    })
  }

  render () {
    return (
      <div>
        <div id="infoEdit" hidden={this.state.edit}>
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

        <div id="infoMain" hidden={this.state.hidden}>
          <h2>{this.state.fname} {this.state.lname}</h2>
          <h4>{this.state.phone}</h4>
          <h4>{this.state.email}</h4>
          <p>{this.state.bio}</p>
        </div>
        <Btn updateEdit={this.updateButton} updateHidden={this.updateButton}/>
        <hr></hr>
      </div>
    )
  }
}

export default Info;