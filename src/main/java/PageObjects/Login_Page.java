package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import Framework.SeleniumKeywords;

public class Login_Page {
 WebDriver driver;
 
//locating elements by id locater
    @FindBy(id="Email")
	@CacheLookup
	WebElement emailid;
    
  //locating elements by linktext locater
    @FindBy(linkText="Log in")
	@CacheLookup
	WebElement loginlink;
    
  //locating elements by name locater
    @FindBy(how=How.NAME, using="Password")
	@CacheLookup
	WebElement password;
    
  //locating elements by xpath locater
    @FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input")
	@CacheLookup
	WebElement loginbutton;
    
    @FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[1]/div/span")
    @CacheLookup
    WebElement errormsg;
    
    //constructor
    public Login_Page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
    //setters
    public void setEmail(String emailid)
    {
    	SeleniumKeywords.sendData(this.emailid, emailid);
    }
    
    public void setPassword(String password)
    {
    	SeleniumKeywords.sendData(this.password, password);
    }
     
    public void submit()
    {
    	SeleniumKeywords.clickButton(loginbutton);
    }
    
    public String textMessage()
    {
    	return(SeleniumKeywords.Message(errormsg));
    	
    }
    public void successfullogin(String emailid,String password)
    {
    	SeleniumKeywords.sendData(this.emailid, emailid);
    	SeleniumKeywords.sendData(this.password, password);
    	loginbutton.click();
    	
    }
    public void clickLogin()
    {
    	SeleniumKeywords.clickButton(loginlink);
    }
 
}
