const { assert } = require("chai");
const Loginpage = require("../Pages/Loginpage");

describe("Login", async function(){
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

});

describe("Full checkout the items", async function(){
    it("Add the items to cart", async function(){
        await $('#add-to-cart-sauce-labs-backpack').click();
        await browser.pause(3000);
    });
    it("Go to cart", async function(){
        await $('#shopping_cart_container').click();
        await browser.pause(3000);
    });
    it("Goto CHECKOUT:Your information page", async function(){
        await $('#checkout').click();
        await browser.pause(3000);
    });
    it("Enter values in CHECKOUT:Your information page", async function(){
        await $('#first-name').setValue("Moulika");
        await $('#last-name').setValue("V");
        await $('#postal-code').setValue("123456");
        await browser.pause(4000);
    });
    it("Goto CHECKOUT:OVERVIEW page", async function(){
        await $('#continue').click();
        await browser.pause(3000);
    });
    it("Goto CHECKOUT:COMPLETE page", async function(){
        await $('#finish').click();
        await browser.pause(5000);
    });
});
