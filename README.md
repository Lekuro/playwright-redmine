# Redmine Automation Project 🚀

This project is a high-quality test automation suite for [redmine.org](https://www.redmine.org/) built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)**.

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright Browsers:**
   ```bash
   npx playwright install
   ```

## 🏃‍♂️ Running Tests

- **Run all tests (headless):**
  ```bash
  npm test
  ```
- **Run tests in UI mode:**
  ```bash
  npm run test:ui
  ```
- **Generate and View Allure Report (Single File):**
  ```bash
  npm run test:allure
  ```
- **View standard Playwright HTML report:**
  ```bash
  npx playwright show-report
  ```

## 📂 Project Structure

- `tests/` - Test specifications.
- `pages/` - Page Object Model classes.
- `data/` - Test data (JSON).
- `fixtures.ts` - Custom Playwright fixtures for POM.
- `playwright.config.ts` - Playwright configuration (Reporters: HTML, Line, Allure).
- `tsconfig.json` - TypeScript configuration.
- `.github/workflows/` - CI/CD pipeline (GitHub Actions).

## 📈 Project Quality Standards

1. **Page Object Model (POM)**: Logic is separated from tests for better maintainability.
2. **Data-Driven Testing**: External test data stored in `data/testData.json`.
3. **Verification Methods**: Page Objects include built-in assertions (e.g., `expectErrorToBeVisible`).
4. **CI/CD Integration**: Automated execution via GitHub Actions with Allure reports published to GitHub Pages.
5. **Clean Code**: Strict English language standard for code and documentation.
