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

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return(
      <form>
        <input
        type="input"
        placeholder="Name"
        name="name"
        data-cy="name"
        value={this.state.name}
        onChange={(event) => this.changeHandler(event)}
        />
        <input
        type="input"
        placeholder="Date (mm/dd)"
        name="date"
        data-cy="date"
        value={this.state.date}
        onChange={(event) => this.changeHandler(event)}
        />
        <input
        type="input"
        placeholder="Time"
        name="time"
        data-cy="time"
        value={this.state.time}
        onChange={(event) => this.changeHandler(event)}
        />
        <input
        type="input"
        placeholder="Number of guests"
        name="number"
        data-cy="number"
        value={this.state.number}
        onChange={(event) => this.changeHandler(event)}
        />
        <button onClick={(event) => this.submitReservation(event)} data-cy="submit-btn">Make Reservation</button>
      </form>
    )
  }
}

export default Form