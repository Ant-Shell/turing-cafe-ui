import React from "react"
import "./Reservations.css"
import Card from "../Card/Card"

const Reservations = ( {reservations} ) => {
  const reservationsList = reservations.map(reservation => {
    const { id, name, date, time, number} = reservation
    return (
      <Card 
      id={id}
      name={name}
      date={date}
      time={time}
      number={number}
      key={id}
      />
    )
  })

  return (
    <div className="resy-list-container" data-cy="list-container">
      {reservationsList}
    </div>
  )
}


export default Reservations