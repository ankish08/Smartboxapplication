Feature: Add a Gift Box
 
 As a Customer, I want to add desired gift box in to the cart

@focus
Scenario: Add any popular gift box to the cart
  Given Customer navigates to the Homepage of the Smartbox application
  When Customer clicks on any popular Gift Box
  And Customer clicks on the Add to cart button
  Then The Gift Box should be added in to the shopping cart