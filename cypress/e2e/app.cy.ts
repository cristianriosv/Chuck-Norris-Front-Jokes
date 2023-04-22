describe('Navigation', () => {
    it('should navigate to the main page', () => {
        cy.visit('/')
        cy.get('main').contains('Hello from Chuck Norris Jokes content')
    })
})