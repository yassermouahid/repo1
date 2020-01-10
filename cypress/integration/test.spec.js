describe('My first cypress test', function() {
    it('Login in Avito.ma', function ()  {
        cy.log('Navigate to listing view')
        cy.visit('https://www.avito.ma/')

    })
})