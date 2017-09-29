const puppeteer = require('puppeteer');



(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://login.1688.com/member/signin.htm');
    await page.mouse.move(1447, 166);
    await page.mouse.click(1447, 166);
    await page.type('eelly0921', { delay: 400 })
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.type('123123kk', { delay: 400 })
    await page.mouse.move(1290, 380);
    await page.mouse.click(1290, 380);
    await page.goto('https://s.1688.com/company/company_search.htm?keywords=%CB%D9%C2%F4%CD%A8%B1%AC%BF%EE&n=y&spm=a260k.635.1998096057.d1', { waitUntil: 'networkidle' });
    await page.waitForSelector('[class=list-item-title-text]');
    let company_names = await page.evaluate(() => {

        let as = [...document.querySelectorAll('[class=list-item-title-text]')];
        return as.map((a) => {
            return {     
                href: a.href.trim(),
                name: a.text
            }
        });
        resolve();
	})

    
    console.log(company_names);
     await browser.close();

})()