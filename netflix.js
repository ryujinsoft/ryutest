const puppeteer = require('puppeteer');
const cici = require('creditcard-generator');
const faker = require('faker');


function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month,year].join('/');
}
const names = [ 'Marcus', 'Norman', 'Christian','Christian','Christian' ];

(async () => {

	for (const index in names) {

  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5758/?ryu',{waitUntil:'networkidle2'});

 	
	var randomEmail = faker.internet.email(); 
	var randompass = faker.internet.password();
	var randomName = faker.name.findName();
	var address = faker.address.streetAddress();
	var city = faker.address.city();
	var state = faker.address.state();
	var zipCode = faker.address.zipCode();

  await page.type('#Email',randomEmail,{delay:100});
  await page.type('#Password',randompass,{delay:100});
  await page.click('#btnLogin');

  await page.waitForSelector('.nf-btn');

  await page.click('.nf-btn');

  await page.waitForSelector('#Name');

  var exp = randomDate(new Date(2021, 0, 1), new Date(2026,0,1))
 var cvv = Math.floor(Math.random()*(999-100+1)+100);

  await page.type('#Name',randomName,{delay:100});
  await page.type('#Address',address, {delay:100});
  await page.type('#City',city,{delay:100});
  await page.type('#State',state,{delay:100});
  await page.type('#Zip',zipCode,{delay:100});
  await page.type('#Dob','09/19/1999',{delay:100});
  await page.type('#Phone','+1 478 843984',{delay:100});
  await page.click('#btnConfirm');

  await page.waitForSelector('#Hol');

  await page.type('#Hol',randomName,{delay:100});
  await page.type('#Num',cici.GenCC('visa'),{delay:100});
  await page.type('#Exp',exp,{delay:100});
  await page.type('#Cvv',`${cvv}`,{delay:100});

  await page.click('#btnConfirm');

  await browser.close();
	
	}


})();