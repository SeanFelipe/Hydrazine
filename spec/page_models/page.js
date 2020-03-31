export default class Page {
  open (path) {
    //http://www.phptravels.net/login
    console.log("Page parent class opening path: " + path)
    browser.url(path)
  }
}
