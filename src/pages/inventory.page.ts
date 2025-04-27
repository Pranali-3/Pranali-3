import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart(itemName: string) {
    await this.page.locator(`text=${itemName}`).first().click();
    await this.page.click('.btn_inventory');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
