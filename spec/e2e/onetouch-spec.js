// spec.js

var url = 'http://localhost/onetouch';

  describe('onetouch App', function() {

  beforeEach(function() {
      browser.get(url);
      browser.manage().logs()
        .get('browser').then(function(browserLog) {
        console.log('log: ' +
          require('util').inspect(browserLog));
      });
    });


  it('should have a Title', function() {
        expect(browser.getTitle()).toEqual('Onetouch Apps');
  });

  it('Should fill the reqeust form and get success response after submission', function() {
    element(by.name('company.name')).sendKeys('Rablion');
    element(by.name('company.title')).sendKeys('Rablion softwares private limited');
    element(by.name('company.registrationNo')).sendKeys(12345);
    element(by.name('company.registrationYear')).sendKeys('01/01/2015');
    element(by.name('company.owner.name')).sendKeys('Rajesh');
    //element(by.name('company.owner.photgraph')).sendKeys('');
    element(by.name('company.shortDescription')).sendKeys('Software Development');

    element(by.id('contact_details')).click();

        element(by.name('contact.registrationAddress')).sendKeys('B 102, SSPDL CRESCENT APARTMENTS 1/278, VANDALLUR ROAD, KELAMBAKKAM CHENNAI - 603103');
        element(by.name('contact.officeAddress')).sendKeys('B 102, SSPDL CRESCENT APARTMENTS 1/278, VANDALLUR ROAD, KELAMBAKKAM CHENNAI - 603103');
        element(by.name('contact.landlineNumber')).sendKeys('044-22456896');
        element(by.name('contact.mobileNumber')).sendKeys('9791189231');
        element(by.name('contact.emailId')).sendKeys('info@rasoftwares.com');

        element(by.id('company_information')).click();
        element(by.name('website.website')).sendKeys('www.rablion.com');
        element(by.name('website.aboutcompany')).sendKeys('Software and Carreer Development');

    element(by.id('product_catalog')).click();
        //Add first product item
        //element(by.id('product_catalog')).click();
        element(by.model('item.name')).sendKeys('Product-A');
        element(by.model('item.price')).sendKeys('12345');
        element(by.model('item.discount')).sendKeys('15');

        element(by.id('addProduct')).click();

        browser.driver.sleep(500);
        expect(element(by.id('product_row_1')).isPresent()).toBe(true);

        //Add second product item
        element(by.model('item.name')).sendKeys('Product-B');
        element(by.model('item.price')).sendKeys('54321');
        element(by.model('item.discount')).sendKeys('25');

        element(by.id('addProduct')).click();
        browser.driver.sleep(500);
        expect(element(by.id('product_row_2')).isPresent()).toBe(true);

    element(by.id('service_catalog')).click();

    element(by.id('submit_btn')).click();

    browser.driver.sleep(2000);

  });

  it('Should fill the reqeust form, add two rows in product list and delete 1 row and submit', function() {
    element(by.name('company.name')).sendKeys('Rablion');
    element(by.name('company.title')).sendKeys('Rablion softwares private limited');
    element(by.name('company.registrationNo')).sendKeys(12345);
    element(by.name('company.registrationYear')).sendKeys('01/01/2015');
    element(by.name('company.owner.name')).sendKeys('Rajesh');
    //element(by.name('company.owner.photgraph')).sendKeys('');
    element(by.name('company.shortDescription')).sendKeys('Software Development');

    element(by.id('contact_details')).click();

        element(by.name('contact.registrationAddress')).sendKeys('B 102, SSPDL CRESCENT APARTMENTS 1/278, VANDALLUR ROAD, KELAMBAKKAM CHENNAI - 603103');
        element(by.name('contact.officeAddress')).sendKeys('B 102, SSPDL CRESCENT APARTMENTS 1/278, VANDALLUR ROAD, KELAMBAKKAM CHENNAI - 603103');
        element(by.name('contact.landlineNumber')).sendKeys('044-22456896');
        element(by.name('contact.mobileNumber')).sendKeys('9791189231');
        element(by.name('contact.emailId')).sendKeys('info@rasoftwares.com');

        element(by.id('company_information')).click();
        element(by.name('website.website')).sendKeys('www.rablion.com');
        element(by.name('website.aboutcompany')).sendKeys('Software and Carreer Development');

    element(by.id('product_catalog')).click();
        //Add first product item

        element(by.model('item.name')).sendKeys('Product-A');
        element(by.model('item.price')).sendKeys('12345');
        element(by.model('item.discount')).sendKeys('15');

        element(by.id('addProduct')).click();

        browser.driver.sleep(500);
        expect(element(by.id('product_row_1')).isPresent()).toBe(true);

        //Add second product item
        element(by.model('item.name')).sendKeys('Product-B');
        element(by.model('item.price')).sendKeys('54321');
        element(by.model('item.discount')).sendKeys('25');

        element(by.id('addProduct')).click();
        browser.driver.sleep(500);
        expect(element(by.id('product_row_2')).isPresent()).toBe(true);

        element(by.id('deleteProduct_2')).click();
        browser.driver.sleep(500);
        expect(element(by.id('product_row_2')).isPresent()).toBe(false);

    element(by.id('service_catalog')).click();

    element(by.id('submit_btn')).click();

    browser.driver.sleep(2000);
  });

  it('Should navigate to list screen and wait for 5 seconds and validate the table row count response', function() {
    element(by.id('List')).click();
    browser.driver.sleep(100);
  });
});
