describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('30');

    element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
        toEqual('31'); // This is wrong!

  });
});