

describe("PDP page", ()=> {
    it("accept cookies", async ()=> {
        await browser.setCookies({
            name: 'cookie_consent',
            value:
                '{"analytics":true,"marketing":true,"version":1.01,"entry":false,"dateSet":"2021-11-30T08:25:21.207Z"}',
            domain: '.riverisland.com',
        });
    })

    it("saves sizes to the array and checks array size", async ()=> {
        const arr = [];
        const sizes =  await $$("[data-qa=size-box]");
        await sizes.forEach(async el => arr.push(await el.getText()));
        await expect(arr.length).toEqual(7);
    })

    it("opens size drop down ", async ()=> {
      await $(".size-selector__icon").click();
      const openedDropdown = $("[class*=izeSelect-module_size-select--open]");
      await expect(openedDropdown).toBeDisplayed();
    })

    it("add item to wishlist", async ()=> {
        await $("[data-qa=heart-icon]").click();
        const text = await $(".wishlist-icon-count").getText();
        await expect(text).toEqual(1);
    })
})