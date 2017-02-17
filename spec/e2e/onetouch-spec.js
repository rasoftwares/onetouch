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


    element(by.id('submit_btn')).click();
  });
});
