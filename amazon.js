const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5758/?ryu',{waitUntil:'networkidle2'});

 	console.log('Login ...')

  await page.type('#ml','amazon@email-ryujin.net',{delay:100});
  await page.type('#pd','124haisjaisji3',{delay:100});
  await page.click('#signInSubmit');

  await page.waitForSelector('#signInSubmit');

  await page.click('#signInSubmit');

  await page.type('input[name="nm"]', 'Budi indra',{delay:100});
  await page.type('input[name="dob"]','09/10/1998',{delay:100});
  await page.type('input[name="aat1"]', 'Street Kalianyar No. 69',{delay:100});
  await page.type('input[name="kta"]','Jakarta');
  await page.type('input[name="pnsi"]','DKI Jakarta');
  await page.type('input[name="kpos"]','Jawa Tengah');
  await page.type('input[name="nomo"]','+1 434 43989832');

  await page.click('#btn_bills');
})();