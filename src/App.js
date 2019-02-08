import React, { Component } from 'react'
import './App.css'
import Datepicker from './Datepicker'

class App extends Component {

  state = {
    date: new Date()
  }

  handleClick = newDate => {
    console.log(newDate)
    this.setState({
      date: newDate
    })
  }
  render() {
    return <Datepicker selected={this.state.date} handleClick={this.handleClick} />
  }
}

export default App
