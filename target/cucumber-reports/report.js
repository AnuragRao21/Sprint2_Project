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
  "line": 13,
  "name": "Unsuccesful login on entering valid Email and invalid password",
  "description": "",
  "id": "login;unsuccesful-login-on-entering-valid-email-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@UnsuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters the valid email and invalid password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "display alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 26093196100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_the_valid_email_and_invalid_password()"
});
formatter.result({
  "duration": 2181065101,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_the_button()"
});
formatter.result({
  "duration": 3514563500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.display_alert_message()"
});
formatter.result({
  "duration": 1131917400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Login link is avaialble.",
  "description": "user has also clicked on the login link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Unsuccesful login on entering invalid email and invalid password",
  "description": "",
  "id": "login;unsuccesful-login-on-entering-invalid-email-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@UnsuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters the invlid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "display alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 29039101999,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_the_invlid_email_and_password()"
});
formatter.result({
  "duration": 2197164000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_the_button()"
});
formatter.result({
  "duration": 3548799601,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.display_alert_message()"
});
formatter.result({
  "duration": 1124918599,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Login link is avaialble.",
  "description": "user has also clicked on the login link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "Unsuccesful login on entering invalid email and valid password",
  "description": "",
  "id": "login;unsuccesful-login-on-entering-invalid-email-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@UnsuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enters the invlid email and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "display alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 33797845301,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_the_invlid_email_and_valid_password()"
});
formatter.result({
  "duration": 2283744400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_the_button()"
});
formatter.result({
  "duration": 3540030799,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.display_alert_message()"
});
formatter.result({
  "duration": 1111118999,
  "status": "passed"
});
});