package StepDefinitions;

//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import Framework.SeleniumKeywords;
import PageObjects.Home_Page;
import PageObjects.UpdateCart_Page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class UpdateCart_Steps {
    WebDriver driver;
	Home_Page hpobj;
	UpdateCart_Page scobj;
	 
	
/*	@Before
	public void openBrowsser() {
		
	System.setProperty("webdriver.chrome.driver", "C:\\Driver\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	
	
	hpobj = new HomePage(driver);
	
	//hpobj = PageFactory.initElements(driver,HomePage.class );
	//scobj = PageFactory.initElements(driver,ShoppingCartPageFactory.class );


	}*/
	@Given("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		
		driver=SeleniumKeywords.openBrowser();
		
		
		hpobj = new Home_Page(driver);
		driver.get("http://demowebshop.tricentis.com/");
	}

	@When("^User clicks on books link$")
	public void user_clicks_on_books_link() throws Throwable {
	    hpobj.selectCategory();
	}

	@When("^selects a book to add to cart$")
	public void selects_a_book_to_add_to_cart() throws Throwable {
		
	    hpobj.selectItem();
	}

	@When("^click on Add to cart$")
	public void click_on_Add_to_cart() throws Throwable {
	   hpobj.addToCart();
	}

	@When("^item is added to cart successfully$")
	public void item_is_added_to_cart_successfully() throws Throwable {
	    String actual=hpobj.getMessage();
	    Assert.assertEquals(actual, "The product has been added to your shopping cart");
	}
	
	@When("^User is on the shopping cart page$")
	public void user_is_on_the_shopping_cart_page() throws Throwable {
		/*ArrayList<String> tabs2 = new ArrayList<String> (driver.getWindowHandles());
		 driver.switchTo().window(tabs2.get(0));
		 Thread.sleep(3000);*/
	   hpobj.goToCart();
	}

	@When("^the user selects the items on remove$")
	public void the_user_selects_the_items_on_remove() throws Throwable {
		scobj=new UpdateCart_Page(driver);
	    scobj.removeItem();
	}

	@When("^clicks on the update button$")
	public void clicks_on_the_update_button() throws Throwable {
	    scobj.updateCart();
	}

	@Then("^Cart should be updated$")
	public void cart_should_be_updated() throws Throwable {
	   String actual=scobj.cartMessage();
	   Assert.assertEquals(actual, "Your Shopping Cart is empty!");
	}





}
