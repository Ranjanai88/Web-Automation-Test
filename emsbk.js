describe('EMSBK code challenge',function(){
	it('Testcase1',function(){
		var url1='https://viewpoint-staging.bksv.com/sat3';
		browser.ignoreSynchronization = true;
		browser.get(url1);
		browser.manage().window().maximize();
		webelement el1=element(by.id('form_name'));
		e11.sendkeys('Banumathy');
		element(by.id('form_surname')).sendKeys('Sankaran');
		element(by.xpath('//input[@id='form_address1']')).sendKeys('field street');
		element(by.xpath('//input[@id='form_city']')).sendKeys('Melbourne');
		element(by.id('form_address2')).sendKeys('Tarneit');
		element(by.id('form_zipcode')).sendKeys('3012');
		element(by.id('form_state')).click();
		element(by.xpath('//label[@for='form_workphone']')).sendKeys('0423416677');
		element(by.css(#input'#form_date')).sendKeys('12-12-2019');
		var el2 = element.all(by.class('datetime').get(3);
		el2.click();
		element(by.css('#form_comments').sendKeys('nijfn');
		var el3 = element(by.xpath('//select[@id='form_responserequired']')).click();
		browser.driver.sleep(8000);
		el3.$('[value="No"]').click();
		element(by.id('form_send_receipt_None')).all(by.css('#form_send_receipt_None')).get(0).click();
		element(by.xpath('//button[@name='submit']').click();
		
			
		
	});
	
	it('Testcase2',function(){
		
		var url2 = 'https://viewpoint-admin-staging.emsbk.com/dca4';
		browser.ignoreSynchronization = true;
		browser.get(url2);
		browser.manage().window().maximize();
		browser.driver.sleep(8000);
		browser.waitForAngular();
		element(by.name('username')).sendKeys('abcd1234');
		var pass = element(by.name('password'));
		pass.sendKeys('3344545sdd');
		expect(pass.getText()).toEqual('242562wdu');
		element(by.xpath('//span[@class='auth0-label-submit']')).click();
					
	});
	
	
});
