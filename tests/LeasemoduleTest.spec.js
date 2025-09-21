import { test, expect } from '@playwright/test';


// --- TESTS ---
//npx playwright test "tests/LeasemoduleTest.spec.js"

//Testing the Lease module solution 
test('Lease module solution ', async ({page})=> 
{
    //navigates to the lease module
    await page.goto("https://www.uname-it.com/");
    await page.locator("text='Alle oplossingen'").first().click();
    await page.locator('.dropdown-menu >> text=Websites').first().click();
    await page.locator(".item-title >> text='UnameIT Lease module'").click();
    await expect(page.locator('.page__title')).toContainText('Bekijk de vernieuwde Online leasemodule!'); 
    
    //selects 50.000 km as milage 
    await page.locator('#filter-km').nth(1).selectOption('50000');

    //selects 48 months as runtime
    await page.locator('#filter-duration').nth(1).selectOption('48');

    //selects BMW as the car brand
    await page.getByText('BMW').nth(1).click();

   //selects benzine as fuel
    await page.locator('text="Brandstof"').nth(1).click();
    await page.getByText('Benzine (1)').last().click();

    //select the available lease car
    await page.locator('a div.btn').click();

    //select the available lease car
    await page.locator('a.btn-primary').click();
    await page.getByText('Bestel deze auto ').click();

    //fill the form with the required info 
    await page.getByText('Dhr.').click();
    await page.locator('#firstname').fill('Fadi');
    await page.locator('#lastname').fill('Haddad');
    await page.locator('#email').fill('fadi_nwvg@live.nl');
    await page.locator('#phone').fill('0643597472');
    await page.locator('#street').fill('mijnstraat');
    await page.locator('#housenumber').fill('123');
    await page.locator('#postalcode').fill('1234AB');
    await page.locator('#city').fill('Amsterdam');
    await page.getByText('Ik heb de privacyverklaring gelezen').click();
    await page.getByText('Houd mij op de hoogte van nieuws en aanbiedingen').click();
    await page.getByText('Bestelling afronden').last().click();

    //Assertion to check if all went well
    await expect(page.locator('.view-confirmation')).toContainText('Bedankt voor uw aanvraag!'); 


    //await page.pause();
    //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





    
    
  
    

    



    

    

    
    





});


   



   
