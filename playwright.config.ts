import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'GoogleChrome',
      use: {
        channel: 'chrome', // this uses actual Chrome (not Chromium)
      },
    },
  ],
});
