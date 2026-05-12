import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegistrationPage extends BasePage {
  readonly submitButton: Locator;
  readonly errorMessages: Locator;

  constructor(page: Page) {
    super(page);
    this.submitButton = page.locator('input[name="commit"]');
    this.errorMessages = page.locator('#errorExplanation');
  }

  async submitForm() {
    await this.submitButton.click();
  }

  /**
   * Verify that error messages are displayed (e.g. after empty submission)
   */
  async expectErrorToBeVisible() {
    await expect(this.errorMessages).toBeVisible();
  }
}
