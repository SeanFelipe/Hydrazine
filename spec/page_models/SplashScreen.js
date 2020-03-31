import Page from './page'

class SplashScreen extends Page {

    /**
    * define elements
    */

    get splashText ()     { return $('//div[contains(., "Futbol")]'); }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('/')
        browser.pause(7000);
    }

    waitForContactPageToLoad () {
      if(!this.contactUsText.isDisplayed()){
        this.contactUsText.waitForDisplayed(3000);
      }
    }

  /*
    getPageTitle(){
      return this.contactUsText.getText();
    }
    */
}

export default new SplashScreen()
