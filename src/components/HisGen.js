import React, { Component } from 'react';
import History from './History';
import Btn from './Button';

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
      hisArr: [{ id: 1, title: 'History 1' }],
      edit: false,
      hidden: true,
      button: 'Done'
    };
    this.addHistory = this.addHistory.bind(this);
    this.updateButton = this.updateButton.bind(this);

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

  updateButton() {
    this.setState({
      hidden: !this.state.hidden,
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <div>
        <div hidden={this.state.edit}>
          {this.state.hisArr.map(history => (
            <History key={history.id} title={history.title} />
          ))}
        </div>

        <button hidden={this.state.edit} onClick={this.addHistory}>New</button>
        <Btn updateEdit={this.updateButton} updateHidden={this.updateButton}/>

      </div>
    );
  }
}


export default HisGen;