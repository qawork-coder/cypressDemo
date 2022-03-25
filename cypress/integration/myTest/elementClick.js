describe('Launch App',()=>{

    it('app testing',()=>{
cy.visit('https://ww.freshworks.com')
cy.contains('Customers')
cy.contains('Customers').click()
cy.url().should('include', '/customers')

    })
})