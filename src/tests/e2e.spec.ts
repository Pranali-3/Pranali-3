import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test.describe('SauceDemo E2E Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Verify Z-A name sorting', async () => {
    await inventoryPage.selectSortOption('za');
    const names = await inventoryPage.getItemNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  });

  test('Verify high to low price sorting', async () => {
    await inventoryPage.selectSortOption('hilo');
    const prices = await inventoryPage.getItemPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });

  test('Add multiple items and complete checkout', async () => {
    await inventoryPage.addItemsToCart(2);
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillInfo('John', 'Doe', '12345');
    await checkoutPage.finishCheckout();
    await checkoutPage.assertSuccess();
  });
});
