describe('Reservation App', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/reservations', 
      [
        {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
        },
        {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
        },
        {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
        }
      ]
    )

    cy.visit('http://localhost:3000')
  })

  it('should display a title', () => {
    cy.get('[data-cy="title"]').contains('Turing Cafe Reservations')
  })

  it('should display reservations', () => {
    cy.get('[data-cy="list-container"]')
    .get('h2').contains('Christie')
    .get('h2').contains('Leta')
    .get('h2').contains('Pam')
  })

  it('should show user data in input fields', () => {
    cy.get('[data-cy="name"]').type('Test1')
    cy.get('[data-cy="date"]').type('10/22')
    cy.get('[data-cy="time"]').type('4:30')
    cy.get('[data-cy="number"]').type(8)

  })

  it('should add a new reservation', () => {
    cy.get('[data-cy="name"]').type('Hannah')
    cy.get('[data-cy="date"]').type('11/22')
    cy.get('[data-cy="time"]').type('2:30')
    cy.get('[data-cy="number"]').type(4)
    cy.get('[data-cy="submit-btn"]').click()
    cy.get('[data-cy="list-container"]').get('h2').contains('Hannah')
  })

})