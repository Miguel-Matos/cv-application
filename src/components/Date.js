import React, { Component } from 'react';
import uniqid from "uniqid";

class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 1993,
      month: 'January',
      day: '',
      dayLoop: 0,
      id: uniqid()
    }

    this.yearChange = this.yearChange.bind(this);
    this.monthChange = this.monthChange.bind(this);
  }

  thisYear = (new Date()).getFullYear();
  allYears = [];
  allDates = [
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

  allDays = [];
// Right now it is rendering the days of the previously selected month
  dayMaker() {
    this.allDays = [];
    for(let x = 1; x <= this.state.dayLoop; x++) {
      this.allDays.push(x)
  }
  }

  yearChange(e) {
    this.setState({ 
      year: e.target.value
    })
  }

  monthChange(e) {
    const selectedMonth = e.target.value;
    const selectedDate = this.allDates.find(date => date.month === selectedMonth);
    if (selectedDate) {
      this.setState({ 
        month: selectedMonth,
        dayLoop: selectedDate.days
      });
    }
    this.dayMaker();
  }

  render() {
    for(let x = 0; x <= 50; x++) {
        this.allYears.push(this.thisYear - x)
    }

    const yearList = this.allYears.map((x) => {return(<option key={this.state.id}>{x}</option>)});
    const monthList = this.allDates.map(month => <option key={this.state.id}>{month.month}</option>);
    const dayList = this.allDays.map(day => <option key={this.state.id}>{day}</option>);
    return(
        <div>
            <select onChange={this.yearChange}>{yearList}</select>
            <select onChange={this.monthChange}>{monthList}</select>
            <select onChange={this.monthChange}>{dayList}</select>


            {`${this.state.year} ${this.state.month} ${this.state.day}`}
        </div>
    );
}
}

export default DropDown;