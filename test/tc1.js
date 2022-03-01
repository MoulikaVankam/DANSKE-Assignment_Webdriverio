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

describe("Add items to cart and validating cart count is increasing", async function(){
    it("Add items to cart and validating cart count is increasing", async function(){
        await $('#add-to-cart-sauce-labs-backpack').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'1');
        await $('#add-to-cart-sauce-labs-bike-light').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'2');
        await $('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'3');
        await $('#add-to-cart-sauce-labs-fleece-jacket').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'4');
        await $('#add-to-cart-sauce-labs-onesie').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'5');
        await $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'6');
        await browser.pause(5000);
    });
});

describe("Remove items to cart and validating cart count is decreasing", async function(){
   it("Remove items to cart and validating cart count is decreasing", async function(){
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'6');    
        await $('#remove-sauce-labs-backpack').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'5');
        await $('#remove-sauce-labs-bike-light').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'4');
        await $('#remove-sauce-labs-bolt-t-shirt').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'3');
        await $('#remove-sauce-labs-fleece-jacket').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'2');
        await $('#remove-sauce-labs-onesie').click();
        assert.equal(await $('//*[@id="shopping_cart_container"]/a/span').getText(),'1');
        await $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]').click();
        await browser.pause(5000);
    });
});