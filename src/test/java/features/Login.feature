Feature: Login

Background: User is on home page of the Demo Web Shop and Login link is avaialble. 
user has also clicked on the login link
@SuccessfulLogin
Scenario: Succesful login on entering valid Email and password 
Given User is on Demo webshop Login page 
When user enters the valid email and password
And clicks the login button
Then user is navigated to home page

@UnsuccessfulLogin
Scenario: Unsuccesful login on entering valid Email and invalid password 
Given User is on Demo webshop Login page 
When user enters the valid email and invalid password
And clicks the login button
Then display alert message
@UnsuccessfulLogin
Scenario: Unsuccesful login on entering invalid email and invalid password 
Given User is on Demo webshop Login page 
When user enters the invlid email and password
And clicks the login button
Then display alert message
@UnsuccessfulLogin
Scenario: Unsuccesful login on entering invalid email and valid password 
Given User is on Demo webshop Login page 
When user enters the invlid email and valid password
And clicks the login button
Then display alert message


