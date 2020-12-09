$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Login link is avaialble.",
  "description": "user has also clicked on the login link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Succesful login on entering valid Email and password",
  "description": "",
  "id": "login;succesful-login-on-entering-valid-email-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters the valid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 12329898700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_enters_the_valid_email_and_password()"
});
formatter.result({
  "duration": 2174733500,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.clicks_the_button()"
});
formatter.result({
  "duration": 3986752400,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 706392700,
  "status": "passed"
});
});