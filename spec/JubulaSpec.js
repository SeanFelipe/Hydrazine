import { Builder, By, Key, until } from 'selenium-webdriver'
import SplashScreen from './page_models/SplashScreen'

//const driver = new Builder().forBrowser('chrome').build()

describe("Splash Screen", function() {
  it("starts", async function() {
    SplashScreen.open()
    browser.pause(5000)

    console.log("Splash Screen browser: " + JSON.stringify(browser))
    console.log("Splash Screen driver: " + JSON.stringify(driver))

    const elems = driver.findElement(By.xpath('//*'))
    console.log("elems length: " + elems.length)
    //driver.findElement(By.id('soccer-ball'))

  })
})
