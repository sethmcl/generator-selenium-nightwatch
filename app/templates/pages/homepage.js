module.exports = {
  load: function () {
    return this.client
      .url('http://www.bing.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Bing');
  },

  search: function (query) {
    return this.client
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', query)
      .waitForElementVisible('input[name=go]', 1000)
      .click('input[name=go]')
      .pause(1000);
  }
};

