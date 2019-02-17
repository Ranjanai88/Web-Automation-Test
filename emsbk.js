describe('EMSBK code challenge',function(){
	it('Testcase1',function(){
		var url1='https://viewpoint-staging.bksv.com/sat3';
		browser.get(url1);
		browser.manage().window().maximize();
		webelement el1=element(by.id('form_name'));
		e11.sendkeys('Banumathy');
		element(by.id('form_surname')).sendkeys('Sankaran');
		element(by.xpath('//input[@id='form_address1']')).sendKeys('field street');
		element(by.xpath('//input[@id='form_city']')).sendkeys('Melbourne');
		element(by.id('form_address2')).sendkeys('Tarneit');
		element(by.id('form_zipcode')).sendkeys('3012');
		element(by.id('form_state')).click();
		element(by.xpath('//label[@for='form_workphone']')).sendkeys('0423416677');
		element(by.css(#input'#form_date')).sendkeys('12-12-2019');
		var el2 = element.all(by.class('datetime').get(3);
		el2.click();
		element(by.css('#form_comments').send keys('nijfn');
		var el3 = element(by.xpath('//select[@id='form_responserequired']')).click();
		browser.driver.sleep(8000);
		el3.$('[value="No"]').click();
		element(by.id('form_send_receipt_None')).all(by.css('#form_send_receipt_None')).get(0).click();
		element(by.xpath('//button[@name='submit']').click();
		
			
		
	});
	
	it('Testcase2',function(){
		
		var url2 = 'https://viewpoint-admin-staging.emsbk.com/dca4';
		browser.get(url2);
		browser.manage().window().maximize();
		browser.driver.sleep(8000);
		browser.waitForAngular();
		element(by.name('username')).sendkeys('abcd1234');
		var pass = element(by.name('password'));
		pass.sendkeys('3344545sdd');
		expect(pass.getText()).toEqual('242562wdu');
		element(by.xpath('//span[@class='auth0-label-submit']')).click();
					
	});
	
	
});
