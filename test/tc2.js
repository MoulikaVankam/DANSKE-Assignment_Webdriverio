const { assert } = require("chai");
const LoginPage = require("../Pages/Loginpage");

describe("Login", async function(){
    it("enter username", async function(){
        await browser.url('/');
        LoginPage.enterUsername("standard_user");
        await browser.pause(1000);  
    });

    it("enter password", async function(){
        LoginPage.enterPassword("secret_sauce");
        await browser.pause(1000);
    });
    
    it("click on Login button", async function(){
        LoginPage.clickOnLogin();
        await browser.pause(2000);
    });

});

describe("Validating values for ", async function(){
    it("Validating values for backPack item", async function(){
        await browser.pause(5000);
        const backPackTitle = await $('//*[@id="item_4_title_link"]/div').getText();
        assert.equal(backPackTitle,'Sauce Labs Backpack');
       const backPackDescription = await $('#item_4_title_link+div').getText();
        assert.equal(backPackDescription,'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        const backPackPrice = await $('//*[@id="item_4_title_link"]/parent::div/following-sibling::div/div').getText();
        assert.equal(backPackPrice,'$29.99');
        await browser.pause(5000);
    });
    it("Validating values for bikeLight item", async function(){
        await browser.pause(5000);
        const bikeLightTitle = await $('//*[@id="item_0_title_link"]/div').getText();
        assert.equal(bikeLightTitle,'Sauce Labs Bike Light');
       const bikeLightDescription = await $('#item_0_title_link+div').getText();
        assert.equal(bikeLightDescription,"A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
        const bikeLightPrice = await $('//*[@id="item_0_title_link"]/parent::div/following-sibling::div/div').getText();
        assert.equal(bikeLightPrice,'$9.99');
        await browser.pause(5000);
    });
    it("Validating values for boltTshirt item", async function(){
        await browser.pause(5000);
        const boltTshirtTitle = await $('//*[@id="item_1_title_link"]/div').getText();
        assert.equal(boltTshirtTitle,'Sauce Labs Bolt T-Shirt');
       const boltTshirtDescription = await $('#item_1_title_link+div').getText();
        assert.equal(boltTshirtDescription,"Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
        const boltTshirtPrice = await $('//*[@id="item_1_title_link"]/parent::div/following-sibling::div/div').getText();
        assert.equal(boltTshirtPrice,'$15.99');
        await browser.pause(5000);
    });
    it("Validating values for fleeceJacket item", async function(){
        await browser.pause(5000);
        const fleeceJacketTitle = await $('//*[@id="item_5_title_link"]/div').getText();
        assert.equal(fleeceJacketTitle,'Sauce Labs Fleece Jacket');
       const fleeceJacketDescription = await $('#item_5_title_link+div').getText();
        assert.equal(fleeceJacketDescription,"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        const fleeceJacketPrice = await $('//*[@id="item_5_title_link"]/parent::div/following-sibling::div/div').getText();
        assert.equal(fleeceJacketPrice,'$49.99');
        await browser.pause(5000);
    });
    it("Validating values for onesie item", async function(){
        await browser.pause(5000);
        const onesieTitle = await $('//*[@id="item_2_title_link"]/div').getText();
        assert.equal(onesieTitle,'Sauce Labs Onesie');
       const onesieDescription = await $('#item_2_title_link+div').getText();
        assert.equal(onesieDescription,"Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        const onesiePrice = await $('//*[@id="item_2_title_link"]/parent::div/following-sibling::div/div').getText();
        assert.equal(onesiePrice,'$7.99');
        await browser.pause(5000);
    });
    it("Validating values for tShirtRed item", async function(){
        await browser.pause(5000);
        const tShirtRedTitle = await $('//*[@id="item_3_title_link"]/div').getText();
        assert.equal(tShirtRedTitle,'Test.allTheThings() T-Shirt (Red)');
       const tShirtRedDescription = await $('#item_3_title_link+div').getText();
        assert.equal(tShirtRedDescription,"This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");
        const tShirtRedPrice = await $('//*[@id="item_3_title_link"]/parent::div/following-sibling::div/div').getText();
        assert.equal(tShirtRedPrice,'$15.99');
        await browser.pause(5000);
    });
});