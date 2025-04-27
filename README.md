This repository contains Playwright end-to-end (E2E) automated tests for SauceDemo.com.

📋 Test Scenarios Covered
Verify sorting order Z-A on the "All Items" page.

Verify price sorting High → Low on the "All Items" page.

Add multiple items to the cart and validate the checkout journey.

🚀 Tech Stack
Playwright
TypeScript
GitHub Actions (for CI/CD)

🛠️ Prerequisites
Node.js (v20.x recommended)
npm (v9.x+)
Browsers (automatically installed via Playwright)

🔥 How to Setup Locally
Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/Sauce-code-Demo.git
cd Sauce-code-Demo
Install dependencies:

bash
Copy
Edit
npm install
Install Playwright browsers:

bash
npx playwright install
Run the tests:

bash
npx playwright test
Open the test report manually if needed:

bash
npx playwright show-report
🎯 Running Specific Tests
Run only one file:

bash
npx playwright test tests/checkout-journey.spec.ts
Run in headed mode (browser visible):

bash
npx playwright test --headed
⚡ GitHub Actions
CI runs Playwright tests automatically on each push to the main branch.
Test reports are published to GitHub Pages for easy viewing.

🖥️ View Live Reports
After each successful run, the Playwright HTML Report will be available at:
https://your-username.github.io/Sauce-code-Demo/

📹 Test Execution Recording
Videos and screenshots are automatically captured tests.

Traces are recorded for debugging.
