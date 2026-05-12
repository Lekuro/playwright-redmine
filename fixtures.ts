import { test as base } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProjectsPage } from './pages/ProjectsPage';

// Оголошуємо типи наших фікстур
type MyFixtures = {
  homePage: HomePage;
  registrationPage: RegistrationPage;
  projectsPage: ProjectsPage;
};

// Експортуємо розширений 'test'
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  projectsPage: async ({ page }, use) => {
    await use(new ProjectsPage(page));
  },
});

export { expect } from '@playwright/test';
