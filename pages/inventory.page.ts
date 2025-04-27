import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart(itemName: string) {
  const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
  await item.locator('button').click();
}
  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
