import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async sortBy(option: string) {
    await this.page.selectOption('.product_sort_container', option);
  }

  async getAllItemNames() {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getAllItemPrices() {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    return prices.map(price => parseFloat(price.replace('$', '')));
  }

  async addItemToCart(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await item.locator('button').click();
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
