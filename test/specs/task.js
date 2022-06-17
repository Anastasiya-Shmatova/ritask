

describe("PDP page", ()=> {
    it("accept cookies", async ()=> {
        await browser.setCookies({
            name: 'cookie_consent',
            value:
                '{"analytics":true,"marketing":true,"version":1.01,"entry":false,"dateSet":"2021-11-30T08:25:21.207Z"}',
            domain: '.riverisland.com',
        });
    })

    it.skip("saves sizes to the array and checks array size", async ()=> {
        const arr = [];
        const sizes =  await $$("[data-qa=size-box] > div");
        for (let el of sizes) {
            arr.push(await el.getText())
        }
        await expect(arr.length).toEqual(7);
    })

    it("opens size drop down ", async ()=> {
      await $(".size-selector__icon").click();
      const openedDropdown = $("[class*=izeSelect-module_size-select--open]");
      await expect(openedDropdown).toBeDisplayed();
    })

    it("add item to wishlist", async ()=> {
        await $("[data-qa=heart-icon]").click();
        const isCountUp = await browser.waitUntil(
            async () => (await $(".wishlist-icon-count").getText()) === '1'
        );
        await expect(isCountUp).toEqual(true);
    })
})