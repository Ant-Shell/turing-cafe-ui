describe('Reservation App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display a title', () => {
    cy.get('[data-cy="title"]').contains('Turing Cafe Reservations')
  })

  it('should display reservations', () => {
    
  })

  it('should show user data in input fields', () => {
    
  })

  it('should add a new reservation', () => {
    
  })

})