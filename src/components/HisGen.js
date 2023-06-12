import React, { Component } from 'react';
import History from './History';

class HisGen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hisArr: [<History />]
    }
    this.addHistory = this.addHistory.bind(this);
  }

  addHistory() {
      this.setState({
        hisArr: [...this.state.hisArr, <History />]
      }
    )
  }

  render() {
    return (
      <div>
        {this.state.hisArr}
        <button onClick={this.addHistory}>New</button>
      </div>
    )
  }
}

export default HisGen;