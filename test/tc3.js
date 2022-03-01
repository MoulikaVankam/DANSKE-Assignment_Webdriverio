const { assert } = require("chai");
const Loginpage = require("../Pages/Loginpage");

describe("Checking Login with standard user", async function(){
    it("enter username", async function(){
        await browser.url('/');
        Loginpage.enterUsername("standard_user");
        await browser.pause(1000);  
    });
    it("enter password", async function(){
        Loginpage.enterPassword("secret_sauce");
        await browser.pause(1000);
    });
    it("click on Login button", async function(){
        Loginpage.clickOnLogin();
        await browser.pause(2000);
    });
    it("Logged in standard user successfully", async function(){
        const productTextAfterLogin = await $('//*[@id="header_container"]/div[2]/span');
        await browser.pause(2000);
        if(productTextAfterLogin.isExisting()){
            console.log("Log in successful");
        }
        else{
            console.log("Log in unsuccessful");
        }
    });

});


describe("Checking Login with locked out user", async function(){
    it("enter username", async function(){
        await browser.url('/');
        Loginpage.enterUsername("locked_out_user");
        await browser.pause(1000);  
    });
    it("enter password", async function(){
        Loginpage.enterPassword("secret_sauce");
        await browser.pause(1000);
    });
    it("click on Login button", async function(){
        Loginpage.clickOnLogin();
        await browser.pause(2000);
    });
    it("Logged in locked out user unsuccessfully", async function(){
        const productTextAfterLogin = await $('//*[@id="header_container"]/div[2]/span');
        if(productTextAfterLogin.isExisting()){
            console.log("Log in successful");
        }
        else{
            console.log("Log in unsuccessful");
        }
        await browser.pause(2000);
    });

});
