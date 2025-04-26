import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly sortDropdown: Locator;
  readonly itemNames: Locator;
  readonly itemPrices: Locator;

  constructor(private page: Page) {
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.itemNames = page.locator('.inventory_item_name');
    this.itemPrices = page.locator('.inventory_item_price');
  }

  async selectSortOption(value: string) {
    await this.sortDropdown.selectOption(value);
  }

  async getItemNames(): Promise<string[]> {
    return await this.itemNames.allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const texts = await this.itemPrices.allTextContents();
    return texts.map(text => parseFloat(text.replace('$', '')));
  }

  async addItemsToCart(count: number) {
    const buttons = this.page.locator('[data-test^="add-to-cart"]');
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
