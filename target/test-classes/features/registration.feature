Feature: Registration

Background: User is on home page of the Demo Web Shop and Registration link is avaialble. 
user has also clicked on the registration link
@SuccessfulRegistration
Scenario: Successful Regisration with valid data
Description: to register, user needs to enter his Gender,First name,Last name,Email,password & confirm password
Given User is on Demo webshop registration page
When user enters Gender,valid First name,Valid Last name,valid password and matching confirmPassword
Then Message displayed Registration Successful

Scenario: Failure in Registration on leaving the first Name empty 
Given User is on Demo webshop Registration page 
When user leaves first Name blank
And clicks the button
Then display alert msg

Scenario: Failure in Registration on leaving the Last Name empty 
Given User is on Demo webshop Registration page 
When user leaves last Name blank
And clicks the button
Then display alert last name msg

Scenario: Failure in Registration on entering incorrect email format 
Given User is on Demo webshop Registration page 
When user enters invalid email id
And clicks the button
Then display alert invalid email format msg

Scenario: Failure in Registration on leaving the Email id empty 
Given User is on Demo webshop Registration page 
When user leaves Email id blank
And clicks the button
Then display alert email msg
@UnsuccessfulRegistration
Scenario: Failure in Registration on leaving the confirm password empty 
Given User is on Demo webshop Registration page 
When user leaves confirm password blank
And clicks the button
Then display alert password msg
