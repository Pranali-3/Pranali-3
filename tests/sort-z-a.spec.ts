import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('Verify items are sorted Z-A', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.sortBy('za');
  const itemNames = await inventoryPage.getAllItemNames();

  const sorted = [...itemNames].sort((a, b) => b.localeCompare(a));
  expect(itemNames).toEqual(sorted);
});
