import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProjectsPage extends BasePage {
  readonly pageTitle: Locator;
  readonly redmineProjectLink: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h2');
    this.redmineProjectLink = page.locator('a.project').filter({ hasText: 'Redmine' }).first();
  }
}
