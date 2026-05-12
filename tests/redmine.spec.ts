import { test, expect } from '../fixtures';
import * as testData from '../data/testData.json';

test.describe('Redmine.org Automation Suite', () => {
  
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test('TC-01: Global Search Functionality', async ({ homePage, page }) => {
    await homePage.searchFor(testData.searchQuery);
    
    await expect(page).toHaveTitle(/Search/);
    await expect(page.locator('#search-results')).toBeVisible();
  });

  test('TC-02: Navigation to Projects Section', async ({ homePage, projectsPage }) => {
    await homePage.projectsLink.click();
    
    await expect(projectsPage.pageTitle).toHaveText(testData.projectTitle);
    await expect(projectsPage.redmineProjectLink).toBeVisible();
  });

  test('TC-03: Registration Negative Validation', async ({ homePage, registrationPage }) => {
    await homePage.registerLink.click();
    await registrationPage.submitForm();
    
    // Using the new verification method from POM
    await registrationPage.expectErrorToBeVisible();
  });

  test('TC-04: Roadmap Progress View', async ({ homePage, page }) => {
    await homePage.roadmapLink.click();
    
    await expect(page).toHaveURL(/.*roadmap/);
    await expect(page.locator('h3 > a').first()).toBeVisible();
  });

  test('TC-05: Documentation and Help Guide', async ({ homePage, page }) => {
    await homePage.helpLink.click();
    
    await expect(page).toHaveTitle(/Guide/);
  });
});
