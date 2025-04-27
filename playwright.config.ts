import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'retain-on-failure',
    video: 'on', // Enable video recording for each test
  },
  projects: [
    {
      name: 'GoogleChrome',
      use: {
        channel: 'chrome', // Run tests in actual Chrome browser
      },
    },
  ],
});
