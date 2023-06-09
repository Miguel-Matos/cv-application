import React, { Component } from 'react';
import uniqid from "uniqid";

class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 2023,
      month: 'January',
      day: 31,
      dayLoop: 31,
      disabled: false
    }

    this.yearChange = this.yearChange.bind(this);
    this.monthChange = this.monthChange.bind(this);
    // this.dayChange = this.dayChange.bind(this);

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
  dayMaker() {
    this.allDays = [];
    for(let x = 1; x <= this.state.dayLoop; x++) {
      this.allDays.push(x)
  }
  }

  yearChange(e) {
    const selectedYear = e.target.value;
    this.setState({ 
      year: selectedYear
    }, () => {
      this.props.onSelectDate(`${this.state.month},  ${this.state.year}`);
    });
  }

  monthChange(e) {
    const selectedMonth = e.target.value;
    const selectedDate = this.allDates.find(date => date.month === selectedMonth);
    if (selectedDate) {
      this.setState({ 
        month: selectedMonth,
        dayLoop: selectedDate.days
      }, () => {
        this.props.onSelectDate(`${this.state.month},  ${this.state.year}`);
      });
      this.dayMaker();
    }


  }


  // dayChange(e) {
  //   this.setState({ 
  //     day: e.target.value
  //   })
  // }

  render() {
    for(let x = 0; x <= 50; x++) {
        this.allYears.push(this.thisYear - x)
    }

    this.dayMaker()

    const yearList = this.allYears.map((x) => {return(<option key={uniqid()}>{x}</option>)});
    const monthList = this.allDates.map(month => <option key={uniqid()}>{month.month}</option>);
    // const dayList = this.allDays.map(day => <option key={this.state.id}>{day}</option>);
    return(
        <div>
            <select value={this.state.month} onChange={this.monthChange} disabled={this.props.disabled}>{monthList}</select>
            <select value={this.state.year} onChange={this.yearChange} disabled={this.props.disabled}>{yearList}</select>

            {/* <select onChange={this.dayChange}>{dayList}</select> */}
        </div>
    );
}
}

export default DropDown;