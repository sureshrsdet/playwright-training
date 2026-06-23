import { test, expect } from "@playwright/test";

test.describe("Login feature", () => {
  test("Verify the login page title", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(
      page.getByRole("heading", { name: "Test login" }),
    ).toBeVisible();
  });

  test("Positive login", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByRole("textbox", { name: "username" }).fill("student");
    await page.getByRole("textbox", { name: "password" }).fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByRole("heading", { name: "Logged In Successfully" }),
    ).toBeVisible();
  });

  test("Negative username test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByRole("textbox", { name: "username" }).fill("incorrectUser");
    await page.getByRole("textbox", { name: "password" }).fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.locator("#error").getByText("Your username is invalid!"),
    ).toBeVisible();
  });

  test("Negative password test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByRole("textbox", { name: "username" }).fill("student");
    await page
      .getByRole("textbox", { name: "password" })
      .fill("incorrectPassword");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.locator("#error").getByText("Your password is invalid!"),
    ).toBeVisible();
  });

  test("Verify login with empty details", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByRole("textbox", { name: "username" }).fill("");
    await page.getByRole("textbox", { name: "password" }).fill("");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.locator("#error").getByText("Your username is invalid!"),
    ).toBeVisible();
  });
});


