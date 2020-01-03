import { SplashScreen } from './page_models/splash_screen.page'
import { Builder, By, Key, until } from 'selenium-webdriver'

const driver = new Builder().forBrowser('chrome').build()
const base = 'http://localhost:3000'

describe("Splash Page", function() {
  it("starts", async function() {
    console.log("*************************************")
    console.log("starting Splash Page test")

    driver.findElement(By.id('soccer-ball'))

  })
})
