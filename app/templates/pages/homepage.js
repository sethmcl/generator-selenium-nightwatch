module.exports = {
  load: function () {
    return this.client
      .url('http://www.bing.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Bing');
  },

  search: function (query) {
    return this.client
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', query)
      .waitForElementVisible('input[name=go]', 1000)
      .click('input[name=go]')
      .pause(1000);
  }
};

