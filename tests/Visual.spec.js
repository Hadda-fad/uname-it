import { test, expect } from '@playwright/test';

// Visual comparison test of the navigation bar on the homepage 
test.only('Visual Comparison', async ({ page }) => {
  await page.goto("https://www.uname-it.com/");
  await expect(page).toHaveTitle(/UnameIT | Automotive Software Company | 25+ Jaar Ervaring/);
  await page.locator('.region--navigation').screenshot({ path: 'navigation_screenshot.png' });
  

 
});
