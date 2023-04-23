describe('Navigation', () => {
    it('should navigate to the main page and fetch 10 jokes', () => {
        cy.visit('/')
        cy.get('ul').children().should('have.length', 10)
    })
})