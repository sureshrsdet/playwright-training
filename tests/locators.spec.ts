import { test, expect } from "@playwright/test";

const url: string = "https://parabank.parasoft.com/parabank/index.htm";

test("Verify Logo is Displayed Using a CSS Locator", async ({ page }) => {
  const logo = page.locator("img.logo");
  await page.goto(url);
  await expect(logo).toBeVisible();
});

test("Verify Logo is Displayed Using a Xpath", async ({ page }) => {
  const logo = page.locator('//img[@title="ParaBank"]');
  await page.goto(url);
  await expect(logo).toBeVisible();
});

test("Verify Logo is Displayed Using a Playwright Built-in Locator", async ({
  page,
}) => {
  const logo = page.getByAltText("ParaBank");
  await page.goto(url);
  await expect(logo).toBeVisible();
});

test("Verify Caption is Displayed Using a CSS Locator", async ({ page }) => {
  const caption = page.locator("p.caption");
  await page.goto(url);
  await expect(caption).toBeVisible();
});
test("Verify Caption is Displayed Using a Xpath", async ({ page }) => {
  const caption = page.locator('//p[text()="Experience the difference"]');
  await page.goto(url);
  await expect(caption).toBeVisible();
});
test("Verify Caption is Displayed Using a Playwright Built-in Locator", async ({
  page,
}) => {
  const caption = page.getByText("Experience the difference");
  await page.goto(url);
  await expect(caption).toBeVisible();
});

test("Verify Solutions Link is Displayed Using a CSS Locator", async ({
  page,
}) => {
  const solutions = page.locator("ul.leftmenu > li.Solutions");
  await page.goto(url);
  await expect(solutions).toBeVisible();
});

test("Verify Solutions Link is Displayed Using a Xpath", async ({ page }) => {
  const solutions = page.locator("//li[@class='Solutions']");
  await page.goto(url);
  await expect(solutions).toBeVisible();
});

test("Verify Solutions Link is Displayed Using a Playwright Built-in Locator", async ({
  page,
}) => {
  const solutions = page.getByText("Solutions", { exact: true });
  await page.goto(url);
  await expect(solutions).toBeVisible();
});

test("Verify About Us Link is Displayed Using a CSS Locator", async ({
  page,
}) => {
  const aboutUs = page.locator("ul.leftmenu li:nth-child(2) a");
  await page.goto(url);
  await expect(aboutUs).toBeVisible();
});

test("Verify About Us Link is Displayed Using a Xpath", async ({ page }) => {
  const aboutUs = page.locator('//ul[@class="leftmenu"]/li[2]/a');
  await page.goto(url);
  await expect(aboutUs).toBeVisible();
});

test("Verify About Us Link is Displayed Using a Playwright Built-in Locator", async ({
  page,
}) => {
  const aboutUs = page.getByRole("link", { name: "About Us" }).first();
  await page.goto(url);
  await expect(aboutUs).toBeVisible();
});

test("Verify Services Link is Displayed Using a CSS Locator", async ({
  page,
}) => {
  const services = page.locator("ul.leftmenu li:nth-child(3) a");
  await page.goto(url);
  await expect(services).toBeVisible();
});
