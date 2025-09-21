// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect : {
    timeout: 40*1000,
  },
  reporter: 'html',

  use: {
  browserName: 'chromium',
  headless : false,
  screenshot : 'on', 
  trace: 'on',
  //...devices['']
  //viewport : {width:720,height:720}
  //video: 'on'
  

    
 
  },


    
});

module.exports = config

