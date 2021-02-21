Given('Customer navigates to the Homepage of the Smartbox application', ()=>{

cy.visit('https://www.smartbox.com/ie', {failOnStatusCode: false}) //Visit Smartbox home page
cy.title().should('eq','Smartbox Ireland - Experience Gifts for all Occasions') //Title verification
cy.get('button[id="onetrust-accept-btn-handler"]').click() //Accept All Cookies
});

When('Customer clicks on any popular Gift Box', ()=>{

    cy.get('div>[alt="Happy Birthday"]',{timeout:3000}).first().click() // Click on the Gift Box
    cy.screenshot()
});

And('Customer clicks on the Add to cart button', ()=>{
    
    cy.get('.add-to-cart__content',{timeout:3000}).first().click() // Click on Add to Cart button
    cy.get('div>a[class="button primary no-margin-bottom"]').click() // Navigate to Cart
        
});

Then('The Gift Box should be added in to the shopping cart', ()=>{`
`
    cy.contains('Your cart').should('be.visible') //Verifying the Shopping Cart is visible
    //cy.get('[class="cart-header__title large-text-left medium-text-left small-text-center"]').should('be.visible');
    cy.get('[alt="Happy Birthday"]').should('be.visible')
    cy.screenshot()
    
            
});
