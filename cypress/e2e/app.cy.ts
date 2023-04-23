describe('Jokes app', () => {
    const EXPECTED_JOKES = 10;

    it('should navigate to the main page and fetch 10 jokes', () => {
        cy.visit('/')
        cy.get('#jokeList').children().should('have.length', EXPECTED_JOKES)
    })
    it('should add jokes to favorite no more than 2', () => {
        const ADD_FAVORITE_JOKES = 2;
        cy.visit('/');
        cy.get('#jokeList').find('button').each(($el, index) => index < ADD_FAVORITE_JOKES && cy.wrap($el).click());
        cy.visit('/favorites');
        cy.get('#jokeList').children().should('have.length', ADD_FAVORITE_JOKES)
    })
    it('should not be able to add more than 10 favorites', () => {
        const ADD_FAVORITE_JOKES = 20;
        const MAX_FAVORITES = 10;
        cy.visit('/');
        cy.get('#jokeList').find('button').each(($el, index) => index < ADD_FAVORITE_JOKES && cy.wrap($el).click());
        cy.reload();
        cy.get('#jokeList').find('button').each(($el, index) => index < ADD_FAVORITE_JOKES && cy.wrap($el).click());
        cy.visit('/favorites');
        cy.get('#jokeList').children().should('have.length', MAX_FAVORITES)
    })
    it('should remove favorites jokes when user click in a previous favorite jokes', () => {
        const ADD_FAVORITE_JOKES = 5;
        const REMOVE_FAVORITE_JOKES = 3;
        cy.visit('/');
        cy.get('#jokeList').find('button').each(($el, index) => index < ADD_FAVORITE_JOKES && cy.wrap($el).click());
        cy.visit('/favorites');
        cy.get('#jokeList').find('button').each(($el, index) => index < REMOVE_FAVORITE_JOKES && cy.wrap($el).click());
        cy.get('#jokeList').children().should('have.length', ADD_FAVORITE_JOKES - REMOVE_FAVORITE_JOKES);
    })
})