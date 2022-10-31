import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
      
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return(
      <form>
        <input
        type="input"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={(event) => this.changeHandler(event)}
        />
        <input
        type="input"
        placeholder="Date (mm/dd)"
        name="date"
        value={this.state.date}
        onChange={(event) => this.changeHandler(event)}
        />
        <input
        type="input"
        placeholder="Time"
        name="time"
        value={this.state.time}
        onChange={(event) => this.changeHandler(event)}
        />
        <input
        type="input"
        placeholder="Number of guests"
        name="number"
        value={this.state.number}
        onChange={(event) => this.changeHandler(event)}
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form