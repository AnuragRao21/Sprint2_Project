Feature: UpdateCart
Background: User is logged in to the website using valid credentials

@Update
Scenario: − Successful adding an item to the cart
Description: This feature will test successful Add to cart functionality
Given User is on home page
When User clicks on books link
And selects a book to add to cart
And click on Add to cart 
And item is added to cart successfully
And User is on the shopping cart page
And the user selects the items on remove
And clicks on the update button
Then Cart should be updated