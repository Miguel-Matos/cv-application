import React, { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      hidden: true,
      button: 'Done'
    }
    this.updateButton = this.updateButton.bind(this);

  }

  updateButton(e) {
    e.preventDefault()
    this.setState({
      hidden: !this.state.hidden,
      edit: !this.state.edit
    }, () => {
      this.props.updateEdit(this.state.edit);
      this.props.updateHidden(this.state.hidden);
    })
    if (this.state.button === 'Done') {
      this.setState({
        button: 'Edit'
      })
    } else {
      this.setState({
        button: 'Done'
      })
    }
  }

  render() {
    return (
      <button onClick={this.updateButton}>{this.state.button}</button>
    )
  }
}

export default Btn;