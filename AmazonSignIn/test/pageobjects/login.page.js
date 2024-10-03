const { driver } = require('@wdio/globals')
const Page = require('./page');
const waitTime = 5000;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#ap_email');
    }

    get inputPassword () {
        return $('#ap_password');
    }

    get continueButton() {
        return $('#continue')
    }

    get btnSubmit () {
        return $('#signInSubmit');
    }

    get accountMenu () {
        return $('#nav-hamburger-menu')
    }

    get signNavigation() {
        return $('#nav-link-accountList-nav-line-1')
    }

    get signOut () {
    return $('//a[text() = "Sign Out"]');
  }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.continueButton.click()
        await driver.pause(waitTime);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

     async signInNavigate() {
        await this.signNavigation.click()
    }

    async verifySignOut() {
        await this.accountMenu.click()
        await this.signOut.click()

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
