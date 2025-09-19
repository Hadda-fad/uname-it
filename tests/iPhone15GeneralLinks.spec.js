import { test, expect } from '@playwright/test';

// iPhone 15 approximate specs
const iPhone15 = {
  name: 'iPhone 15',
  viewport: { width: 430, height: 932 },  // approximate logical pixels
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
};

// Apply iPhone 15 settings to all tests
test.use({ ...iPhone15 });

// --- TESTS ---
//npx playwright test "tests/iPhone15GeneralLinks.spec.js"

test('WAT BIEDEN WIJ', async ({ page }) => {    
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();
  await page.locator('li').getByText('Wat bieden wij').click();
  await expect(page.getByText('De specialisten van UnameIT')).toBeVisible();
});

test('WHATSAPP MET LEF', async ({ page }) => {
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();    
  await page.locator("text='WhatsApp met LEF'").click();
  await expect(page.getByText('Stel je voor')).toBeVisible();
});

test('ALLE OPLOSSINGEN', async ({ page }) => {
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();
  await page.locator("text='Alle oplossingen'").first().click();
  await expect(page.getByText('Websites').first()).toBeVisible();
});

test('WIE ZIJN WIJ', async ({ page }) => {
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();
  await page.locator("text='Wie zijn wij'").click();
  await expect(page.getByText('Wij helpen autobedrijven succesvol te zijn')).toBeVisible();
});

test('NIEUWS', async ({ page }) => {
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();
  await page.locator("text='Nieuws'").first().click();
  await expect(page.locator('.paragraph__title')).toContainText('Nieuws');
});

test('CONTACT', async ({ page }) => {
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();
  await page.locator("text='Contact'").first().click();
  await expect(page.getByText('Adresgegevens')).toBeVisible();
});

test('DEMO?', async ({ page }) => {
  await page.goto('https://www.uname-it.com/');
  await page.locator('.btn-icon--menu').click();
  await page.locator("text='Demo?'").click();
  await expect(page.locator('.paragraph__title').first()).toContainText('Vraag een demo aan');
});
