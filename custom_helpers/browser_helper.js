const Helper = require('@codeceptjs/helper');

class BrowserHelper extends Helper {

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async getCurrentUrl() {
    const helper = this.helpers['Puppeteer'];
    return helper.page.url();
  }
}

module.exports = BrowserHelper;
