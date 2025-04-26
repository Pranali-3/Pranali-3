import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInfo(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }

  async assertSuccess() {
    await this.page.waitForSelector('.complete-header');
    const text = await this.page.textContent('.complete-header');
    expect(text).toContain('THANK YOU FOR YOUR ORDER');
  }
}
