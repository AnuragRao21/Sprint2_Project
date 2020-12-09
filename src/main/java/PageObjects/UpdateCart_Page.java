package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Framework.SeleniumKeywords;

public class UpdateCart_Page {
	WebDriver driver;
	//@FindBy(how=How.LINK_TEXT,using="Shopping cart")
	//WebElement shoppingcart;
	@FindBy(name="removefromcart")
	WebElement remove; 
	@FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div/div/div[2]/div/form/div[1]/div/input[1]")
	WebElement update;
	@FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div/div[2]/div[2]/div")
	WebElement msg;
	
	
	public UpdateCart_Page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	/*public void goToCart()
	{
		shoppingcart.click();
	}*/
	
	public void removeItem()
	{
		//remove.click();
		SeleniumKeywords.clickButton(remove);
	}
	public void updateCart()
	{
		//update.click();
		SeleniumKeywords.clickButton(update);
	}
	public String cartMessage()
	{
		return(SeleniumKeywords.Message(msg));
	}

}
