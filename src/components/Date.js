import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: ''
    }
  }

  dateChange() {
    this.setState = { 
      year: 1993,
      month: 1,
      day: 1
    }
  }

  render() {
    let maxOffset = 50;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }

    const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
    return(
        <div>
            <select>
                {yearList}
            </select>
        </div>
    );
}
}

export default DropDown;