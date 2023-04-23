describe('Navigation', () => {
    it('should navigate to the main page and fetch one joke', () => {
        cy.visit('/')
        cy.get('ul').children()
    })
})