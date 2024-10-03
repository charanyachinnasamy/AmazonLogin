const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const testData = require('../capabilities/testDataConfidential.js');

describe('Login into web browser', () => {
    it('User should be able to login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.signInNavigate()
        await LoginPage.login(testData.EMAIL, testData.PASSWORD)
        await LoginPage.verifySignOut()
        console.log("User successfully logged in and logged out of the browser")

    })
})

