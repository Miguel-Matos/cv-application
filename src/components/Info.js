import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input id="fname" type='text' placeholder='John' required></input>
        </div>
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input id='lname' type='text' placeholder='Smith' required></input>
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input id='phone' type='tel' placeholder='352-867-5309' required></input>
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input id="email" type='email' placeholder='jsmith@gmail.com'></input>
        </div>
        <div>
          <label htmlFor='about'>About You: </label>
          <textarea id="about"></textarea>
        </div>
      </div>
    )
  }
}

export default Info;