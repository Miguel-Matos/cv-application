import React, { Component } from 'react';
import History from './History';

// class HisGen extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       hisArr: [<History />]
//     }
//     this.addHistory = this.addHistory.bind(this);
//   }

//   addHistory() {
//       this.setState({
//         hisArr: [...this.state.hisArr, <History />]
//       }
//     )
//   }

//   render() {
//     return (
//       <div>
//         {this.state.hisArr}
//         <button onClick={this.addHistory}>New</button>
//       </div>
//     )
//   }
// }

class HisGen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hisArr: [{ id: 1, title: 'History 1' }]
    };
    this.addHistory = this.addHistory.bind(this);
  }

  addHistory() {
    const newHistory = {
      id: this.state.hisArr.length + 1,
      title: `History ${this.state.hisArr.length + 1}`
    };

    this.setState({
      hisArr: [...this.state.hisArr, newHistory]
    });
  }

  render() {
    return (
      <div>
        {this.state.hisArr.map(history => (
          <History key={history.id} title={history.title} />
        ))}
        <button onClick={this.addHistory}>New</button>
      </div>
    );
  }
}


export default HisGen;