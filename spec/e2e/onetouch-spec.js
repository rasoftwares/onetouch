// spec.js

var url = 'http://localhost/onetouch';

beforeEach(function() {
    browser.get(url);
  });

describe('onetouch App', function() {
  it('should have a Title', function() {

    expect(browser.getTitle()).toEqual('Onetouch Apps');
  });

  it('Should fill the reqeust form with', function() {
    element(by.name('company.name')).sendKeys('Rablion');
    element(by.name('company.title')).sendKeys('Rablion softwares private limited');
    element(by.name('company.registrationNo')).sendKeys(12345);
    element(by.name('company.date')).sendKeys('01/01/2015');
    element(by.name('company.owner.name')).sendKeys('Rajesh');
    //  element(by.name('company.owner.photgraph')).sendKeys('');
    element(by.name('company.shortDescription')).sendKeys('Software Development');

    element(by.name('contact.registrationAddress')).sendKeys('B 102, SSPDL CRESCENT APARTMENTS 1/278, VANDALLUR ROAD, KELAMBAKKAM CHENNAI - 603103');
    element(by.name('contact.officeAddress')).sendKeys('B 102, SSPDL CRESCENT APARTMENTS 1/278, VANDALLUR ROAD, KELAMBAKKAM CHENNAI - 603103');
    element(by.name('contact.landlineNumber')).sendKeys('044-22456896');
    element(by.name('contact.mobileNumber')).sendKeys('9791189231');
    element(by.name('contact.emailId')).sendKeys('info@rasoftwares.com');

    element(by.name('website.website')).sendKeys('www.rablion.com');
    element(by.name('website.aboutCompany')).sendKeys('Software Development and career Development');

    element(by.id('submit_btn')).click();
  });
});
