const getReservations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/reservations')
    if(!response.ok) {
      console.log(response.status)
      throw new Error('An error has occured')
    }
    const data = await response.json()
    return data
  } 
  catch(error) {
    console.log(error.message)
  }
}

export {getReservations}