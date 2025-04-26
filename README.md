# Playwright Test Automation for SauceDemo

This repository contains end-to-end test automation for [SauceDemo](https://www.saucedemo.com/) using Playwright.

## 📋 Features Covered

- Z-A Sorting Verification
- Price (High to Low) Sorting Verification
- Add Items to Cart & Checkout Flow

## 🛠 Prerequisites

- Node.js (v18 recommended)
- npm (v8+)
- Playwright (auto-installed via npm)
- Git

## 🚀 Setup & Run

```bash
# Install dependencies
npm install

# Run all tests (headless)
npx playwright test

# Run all tests (headed for debug)
npx playwright test --headed

# View HTML report
npx playwright show-report


