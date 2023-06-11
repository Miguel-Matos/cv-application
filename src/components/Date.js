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

    this.dateChange = this.dateChange.bind(this);
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
    const allDates = [
      {month: 'January',
        days: 31
      },
      {month: 'February',
        days: 28
      },
      {
        month: 'March',
        days: 31
      },
      {
        month: 'April',
        days: 30
      },
      {
        month: 'May',
        days: 31
      },
      {
        month: 'June',
        days: 30
      },
      {
        month: 'July',
        days: 31
      },
      {
        month: 'August',
        days: 31
      },
      {
        month: 'September',
        days: 30
      },
      {
        month: 'October',
        days: 31
      },
      {
        month: 'November',
        days: 30
      },
      {
        month: 'December',
        days: 31
      }
    ]
    for(let x = 0; x <= 50; x++) {
        allYears.push(thisYear - x)
    }

    const yearList = allYears.map((x) => {return(<option key={this.state.id}>{x}</option>)});
    const monthList = allDates.map(month => <option key={this.state.id}>{month.month}</option>)
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