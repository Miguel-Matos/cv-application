import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default Header;