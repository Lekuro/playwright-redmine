import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly projectsLink: Locator;
  readonly registerLink: Locator;
  readonly helpLink: Locator;
  readonly roadmapLink: Locator;

  constructor(page: Page) {
    super(page);
    // Описуємо елементи через локатори
    this.searchInput = page.locator('#q');
    this.projectsLink = page.locator('a.projects');
    this.registerLink = page.locator('a.register');
    this.helpLink = page.locator('a.help');
    this.roadmapLink = page.locator('a.roadmap');
  }

  async searchFor(text: string) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }
}
