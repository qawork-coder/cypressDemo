describe('crm app',()=>{
 
it('login test',()=>{

    cy.visit('https://demo.guru99.com/V1/index.php')
cy.contains('Demo')
cy.url().should('include', '/index')
cy.get('input[name="uid"]').type("tj")
cy.get('input[name="password"]').type("tj")
cy.get('input[type="submit"]').click()
})

})