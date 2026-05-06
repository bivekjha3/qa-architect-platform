import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  timeout: 30000,
  use: {
    headless: true,        // run without a visible window
    screenshot: 'off',
    video: 'off',
  },
});
