import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('Verify items are sorted by price high to low', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await new LoginPage(page).goto();
  await new LoginPage(page).login('standard_user', 'secret_sauce');

  await inventoryPage.sortBy('hilo');
  const prices = await inventoryPage.getAllItemPrices();

  const sorted = [...prices].sort((a, b) => b - a);
  expect(prices).toEqual(sorted);
})
