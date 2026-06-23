import { test, expect } from "@playwright/test";

test.skip("Excuting first test case - 001", async ({ page }) => {
  console.log("Excuted first test case 001");
});

test("Verify the gogle home page title displays correctly", async ({
  page,
}) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

test("Verify the Playwright home page have the heding title", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await expect(
    page.getByRole("heading", { name: "Built for testing" }),
  ).toBeVisible();
});
