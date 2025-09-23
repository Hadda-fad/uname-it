// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  // Add multiple reporters: HTML + Allure
  reporter: [
    ['html'],               // existing HTML report
    ['allure-playwright'],  // generates allure-results/
  ],

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',   // take screenshots only on failure
    trace: 'retain-on-failure',      // retain trace for failed tests
    // video: 'retain-on-failure',    // optional: record video on failures
    //viewport: { width: 720, height: 720 }, // optional custom viewport
    // ...devices['iPhone 15'],      // optional device emulation
  },
});

module.exports = config;

