import React, { Component } from 'react';
import uniqid from "uniqid";

class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 1993,
      month: 1,
      day: 1,
      id: uniqid()
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
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let allDays = [];
    for(let x = 0; x <= 50; x++) {
        allYears.push(thisYear - x)
    }

    const yearList = allYears.map((x) => {return(<option key={this.state.id}>{x}</option>)});
    const monthList = allMonths.map(month => <option key={this.state.id}>{month}</option>)
    return(
        <div>
            <select>
                {yearList}
            </select>
            <select>{monthList}</select>


            {`${this.state.year} ${this.state.month} ${this.state.day}`}
        </div>
    );
}
}

export default DropDown;