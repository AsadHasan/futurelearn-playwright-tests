import {Page} from '@playwright/test';

export class Homepage {
  private readonly page;
  private readonly subjects;
  private readonly cookiesAcceptance;
  private readonly cookiesClose;
  private readonly subjectCategories;
  private readonly menuHamburger;

  constructor(page: Page) {
    this.page = page;
    this.subjects = page.locator(
      '[aria-label="Site"] a[role="button"]:has-text("Subjects")'
    );
    this.cookiesAcceptance = page.locator("button:has-text('Accept All')");
    this.cookiesClose = page.locator('#close-pc-btn-handler');
    this.subjectCategories = page.locator(
      "[class*='subjectsAndTopics-subjects'] li"
    );
    this.menuHamburger = page.locator("[title='Main navigation']");
  }

  async open() {
    await this.page.goto('/');
    return this;
  }

  async acceptCookies() {
    if (await this.cookiesClose.isVisible()) {
      await this.cookiesClose.click();
    } else {
      await this.cookiesAcceptance.click();
    }
    return this;
  }

  async showSubjects() {
    if (await this.menuHamburger.isVisible()) {
      await this.menuHamburger.click();
    }
    await this.subjects.click();
    return this;
  }

  async subjectsList() {
    return this.subjectCategories.allTextContents();
  }
}
