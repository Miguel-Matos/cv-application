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
      button: 'Done',
      items: []
    };
    this.addHistory = this.addHistory.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.setItem = this.setItem.bind(this);

  }

  addHistory() {
    const newHistory = {
      id: this.state.hisArr.length + 1,
      title: `History ${this.state.hisArr.length + 1}`
    };

    this.setState({
      hisArr: [...this.state.hisArr, newHistory],
      items: [...this.state.items]
    });
  }

  updateButton() {
    this.setState({
      hidden: !this.state.hidden,
      edit: !this.state.edit
    })
  }

  // setItem(e) {
  //   const newItem = {
  //     id: this.state.items.length + 1,
  //     location: e[0],
  //     from: e[1],
  //     to: e[2]
  //   }
  //   this.setState({
  //     items: [...this.state.items, newItem]
  //   }, () => {
  //     console.log(this.state.items)
  //   });
  // }

  setItem(e, id) {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          location: e[0],
          from: e[1],
          to: e[2]
        };
      }
      return item;
    });
  
    this.setState({
      items: updatedItems
    }, () => {
      console.log(this.state.items);
    });
  }

  render() {

    const eduHis = this.state.items.map(item => <div key={item.id}>
      <h3 key={item.location}>{item.location}</h3>
      <h5 key={item.from}>{item.from} - {item.to}</h5>
    </div>)
    return (
      <div>
        <div hidden={this.state.edit}>
          {this.state.hisArr.map(history => (
            <History onEdit={(e) => this.setItem(e, history.id)} key={history.id} title={history.title} />
          ))}
        </div>

        <button hidden={this.state.edit} onClick={this.addHistory}>New</button>
        <Btn updateEdit={this.updateButton} updateHidden={this.updateButton}/>

        <div>
            {eduHis}
        </div>

      </div>
    );
  }
}


export default HisGen;