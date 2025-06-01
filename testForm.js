const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function fillFormDynamically() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
    
        await driver.get('https://app.cloudqa.io/home/AutomationPracticeForm');

    
        await driver.wait(until.elementLocated(By.xpath("//form")), 10000);

        const firstNameInput = await driver.findElement(By.xpath("//label[text()='First Name']/following-sibling::input"));
        await firstNameInput.sendKeys("Umra");

    
        const lastNameInput = await driver.findElement(By.xpath("//label[text()='Last Name']/following-sibling::input"));
        await lastNameInput.sendKeys("Ansari");

    
        const dobInput = await driver.findElement(By.xpath("//label[text()='Date of Birth']/following-sibling::input"));
        await dobInput.sendKeys("15/04/2005");

        console.log("Form filled successfully.");

    } catch (err) {
        console.error("Error occurred:", err);
    } finally {
     
        await driver.sleep(5000);
        
        await driver.quit();
    }
})();