describe('Navigation', () => {
    it('should navigate to the main page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('main').contains('Hello from Chuck Norris Jokes content')
    })
})