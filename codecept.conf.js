exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://cafetownsend-angular-rails.herokuapp.com',
      show: false,
      windowSize: '1200x900'
    },
    AssertWrapper: {
      require: 'codeceptjs-assert'
    },
    BrowserHelper: {
      require: './custom_helpers/browser_helper.js'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/LoginPage.js',
    homePage: './pages/HomePage.js',
    addUserPage: './pages/AddUserPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './features/step_definitions/login_page_steps.js',
      './features/step_definitions/home_page_steps.js',
      './features/step_definitions/adduser_page_steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  tests: './tests/*_test.js',
  name: 'codecept_demo'
}