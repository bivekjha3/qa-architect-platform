import { test, expect } from '@playwright/test';

let daughterName: string = "Anaya";                // put your real daughter's name
let targetWebsite: string = "https://example.com";
let expectedTitleContains: string = "Example";

test('Take a photo of the website for ' + daughterName, async ({ page }) => {
  // 1. Open the webpage
  await page.goto(targetWebsite);
  
  // 2. Check that the page title is correct
  await expect(page).toHaveTitle(new RegExp(expectedTitleContains));
  
  // 3. Check that the page contains the word 'illustrative'
  await expect(page.locator('body')).toContainText('illustrative');

  // 4. Take a photo and name it with your daughter's name
  await page.screenshot({ path: daughterName + '_evidence.png' });
});