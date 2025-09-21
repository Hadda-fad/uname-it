import { test, expect } from '@playwright/test';


//Playwright by default runs in headless mode
//To run tests, run the following in terminal: npx playwright test 
//To run tests in head-mode, run the following in terminal: npx playwright test --headed
//or in config file place >>> headless : false
//test.only to run a specific test in isolation 

// --- TESTS ---
//npx playwright test "tests/GeneralLinksTest.spec.js"

//trace.playwright.dev 

//Testing the "WAT BIEDEN WIJ" link on the homepage 
test('WAT BIEDEN WIJ-test', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("li").getByText("Wat bieden wij").click();
    await expect(page.getByText('De specialisten van UnameIT')).toBeVisible();  
});

//Testing the "WHATSAPP MET LEF" link on the homepage 
test('WHATSAPP MET LEF-test', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='WhatsApp met LEF'").click();
    await expect(page.getByText('Stel je voor')).toBeVisible();  
}); 

//Testing the "ALLE OPLOSSINGEN" link on the homepage 
test('ALLE OPLOSSINGEN', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='Alle oplossingen'").first().click();
    await expect(page.getByText('Websites').first()).toBeVisible();  
}); 

//Testing the "ALLE OPLOSSINGEN" link on the homepage 
test('WIE ZIJN WIJ', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='Wie zijn wij'").click();
    await expect(page.getByText('Wij helpen autobedrijven succesvol te zijn')).toBeVisible();  
}); 

//Testing the "NIEUWS" link on the homepage 
test('NIEUWS', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='Nieuws'").first().click();
    await expect(page.locator('.paragraph__title')).toContainText('Nieuws');
}); 

//Testing the "CONTACT" link on the homepage 
test('CONTACT', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='Contact'").first().click();
    await expect(page.getByText('Adresgegevens')).toBeVisible(); 
}); 

//Testing the "DEMO?" link on the homepage 
test('DEMO?', async ({page})=> 
{
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='Demo?'").click();
await expect(page.locator('.paragraph__title').first()).toContainText('Vraag een demo aan');
}); 




