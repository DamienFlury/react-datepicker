import React, { Component } from 'react'
import './Datepicker.css'

export class Datepicker extends Component {
  constructor(props) {
    super()
    this.state = {
      shownDate: props.selected
    }
  }

  changeMonth = num => {
    const { shownDate } = this.state
    const nextDate = new Date(
      shownDate.getFullYear(),
      shownDate.getMonth(),
      shownDate.getDate()
    )
    nextDate.setMonth(nextDate.getMonth() + num)
    this.setState({ shownDate: nextDate })
  }

  render() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const amountOfDays = new Date(
      this.props.selected.getFullYear(),
      this.props.selected.getMonth() + 1,
      0
    ).getDate()
    const days = []
    for (let i = 1; i <= amountOfDays; i++) days.push(i)

    return (
      <div className="date-picker">
        <div className="header">
          <div className="arrow" onClick={() => this.changeMonth(-1)}>
            &lt;
          </div>
          <div>{monthNames[this.state.shownDate.getMonth()]}</div>
          <div className="arrow" onClick={() => this.changeMonth(1)}>
            &gt;
          </div>
        </div>
        <div className="day-grid">
          {days.map(day => (
            <button
              key={day}
              className={
                this.props.selected.getDate() === day && this.state.shownDate.getMonth() === this.props.selected.getMonth() ? 'day active' : 'day'
              }
              onClick={() => this.props.handleClick(new Date(this.state.shownDate.getFullYear(), this.state.shownDate.getMonth(), day))}>
              {day}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default Datepicker
