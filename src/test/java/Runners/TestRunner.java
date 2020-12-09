package Runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\ANURAGH RAO\\workspace\\SprintDemoWebShop\\src\\test\\java\\features"
,glue={"StepDefinitions"}
,tags={"@UnsuccessfulLogin"}
,plugin = {"json:target/cucumber.json"}

)
public class TestRunner extends AbstractTestNGCucumberTests {

}