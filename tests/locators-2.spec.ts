import { expect, test } from "@playwright/test";
const url: string = "https://parabank.parasoft.com/parabank/index.htm";

test("Verify Logo is displayed", async ({ page }) => {
  const logo = page.locator('img[src*="logo.gif"]');
  await page.goto(url);
  await expect(logo).toBeVisible();
});

test("Verify caption is displayed", async ({ page }) => {
  const caption = page.locator("p.caption");
  await page.goto(url);
  await expect(caption).toBeVisible();
});

test("Verify solutions link is displayed", async ({ page }) => {
  const solutionsLink = page.getByText("Solutions");
  await page.goto(url);
  await expect(solutionsLink).toBeVisible();
});

test("Verify aboutUs link is displayed", async ({ page }) => {
  const aboutUsLink = page
    .locator(".leftmenu")
    .getByRole("link", { name: "About Us" });
  await page.goto(url);
  await expect(aboutUsLink).toBeVisible();
});

test("Verify services link is displayed", async ({ page }) => {
  const services = page
    .locator(".leftmenu")
    .getByRole("link", { name: "Services" });
  await page.goto(url);
  await expect(services).toBeVisible();
});

test("Verify products link is displayed", async ({ page }) => {
  const products = page
    .locator(".leftmenu")
    .getByRole("link", { name: "Products" });
  await page.goto(url);
  await expect(products).toBeVisible();
});

test("Verify locations link is displayed", async ({ page }) => {
  const locations = page
    .locator(".leftmenu")
    .getByRole("link", { name: "Locations" });
  await page.goto(url);
  await expect(locations).toBeVisible();
});
test("Verify admin page link is displayed", async ({ page }) => {
  const adminPage = page
    .locator(".leftmenu")
    .getByRole("link", { name: "Admin Page" });
  await page.goto(url);
  await expect(adminPage).toBeVisible();
});

test("Verify customer login heading is displayed", async ({ page }) => {
  const customerLoginHeading = page.getByRole("heading", {
    name: "Customer Login",
  });
  await page.goto(url);
  await expect(customerLoginHeading).toBeVisible();
});

test("Verify user name text box is displayed", async ({ page }) => {
  const userNameTbox = page.locator('input[name="username"]');
  await page.goto(url);
  await expect(userNameTbox).toBeVisible();
});

test("Verify password text box is displayed", async ({ page }) => {
  const passwrod = page.locator('input[name="password"]');
  await page.goto(url);
  await expect(passwrod).toBeVisible();
});

test("Verify login button is displayed", async ({ page }) => {
  const loginButton = page.getByRole("button", { name: "Log In" });
  await page.goto(url);
  await expect(loginButton).toBeVisible();
});

test("Verify Forgot login info? link is displayed", async ({ page }) => {
  const forgetInfoLink = page.getByRole("link", { name: "Forgot login info?" });
  await page.goto(url);
  await expect(forgetInfoLink).toBeVisible();
});

test("Verify register link is displayed", async ({ page }) => {
  const fregisterLink = page.getByRole("link", { name: "Register" });
  await page.goto(url);
  await expect(fregisterLink).toBeVisible();
});

test("Verify home button is displayed", async ({ page }) => {
  const homeButton = page
    .locator(".button")
    .getByRole("link", { name: "home" });
  await page.goto(url);
  await expect(homeButton).toBeVisible();
});

test("Verify about button is displayed", async ({ page }) => {
  const aboutButton = page
    .locator(".button")
    .getByRole("link", { name: "about" });
  await page.goto(url);
  await expect(aboutButton).toBeVisible();
});

test("Verify contact button is displayed", async ({ page }) => {
  const contactButton = page
    .locator(".button")
    .getByRole("link", { name: "contact" });
  await page.goto(url);
  await expect(contactButton).toBeVisible();
});

test("Verify ATM services heading is displayed", async ({ page }) => {
  const ATMservices = page.locator("li.captionone");
  await page.goto(url);
  await expect(ATMservices).toBeVisible();
});

test("Verify Withdraw Funds link is displayed", async ({ page }) => {
  const withdrawFundsLink = page
    .locator("ul.services")
    .getByRole("link", { name: "Withdraw Funds" });
  await page.goto(url);
  await expect(withdrawFundsLink).toBeVisible();
});

test("Verify Transfer Funds link is displayed", async ({ page }) => {
  const transferFundsLink = page
    .locator("ul.services")
    .getByRole("link", { name: "Transfer Funds" });
  await page.goto(url);
  await expect(transferFundsLink).toBeVisible();
});

test("Verify Check Balances link is displayed", async ({ page }) => {
  const checkBalancesLink = page
    .locator("ul.services")
    .getByRole("link", { name: "Check Balances" });
  await page.goto(url);
  await expect(checkBalancesLink).toBeVisible();
});

test("Verify make deposits link is displayed", async ({ page }) => {
  const makeDeposits = page
    .locator("ul.services")
    .getByRole("link", { name: "Make Deposits" });
  await page.goto(url);
  await expect(makeDeposits).toBeVisible();
});

test("Verify online services heading is displayed", async ({ page }) => {
  const onlineServicesHeading = page.locator("li.captiontwo");
  await page.goto(url);
  await expect(onlineServicesHeading).toBeVisible();
});

test("Verify bill pay link is displayed", async ({ page }) => {
  const billPay = page
    .locator("ul.servicestwo")
    .getByRole("link", { name: "Bill Pay" });
  await page.goto(url);
  await expect(billPay).toBeVisible();
});

test("Verify account history link is displayed", async ({ page }) => {
  const accountHistory = page
    .locator("ul.servicestwo")
    .getByRole("link", { name: "Account History" });
  await page.goto(url);
  await expect(accountHistory).toBeVisible();
});

test("Verify transfer funds link 2 is displayed", async ({ page }) => {
  const transferFunds2 = page
    .locator("ul.servicestwo")
    .getByRole("link", { name: "Transfer Funds" });
  await page.goto(url);
  await expect(transferFunds2).toBeVisible();
});

test("Verify read more link 1 is displayed", async ({ page }) => {
  const readMore1 = page.getByRole("link", { name: "Read More" }).first();
  await page.goto(url);
  await expect(readMore1).toBeVisible();
});

test("Verify latest news heading is displayed", async ({ page }) => {
  const latestNews = page.getByRole("heading", { name: "Latest News" }).first();
  await page.goto(url);
  await expect(latestNews).toBeVisible();
});

test("Verify events date is displayed", async ({ page }) => {
  const eventsDate = page.locator("li.captionthree");
  await page.goto(url);
  await expect(eventsDate).toBeVisible();
});

test("Verify ParaBank Is Now Re-Opened is displayed", async ({ page }) => {
  const PBINO = page.getByRole("link", {
    name: "ParaBank Is Now Re-Opened",
  });
  await page.goto(url);
  await expect(PBINO).toBeVisible();
});

test("Verify New! Online Bill Pay is displayed", async ({ page }) => {
  const NOBP = page.getByRole("link", {
    name: "New! Online Bill Pay",
  });
  await page.goto(url);
  await expect(NOBP).toBeVisible();
});

test("Verify New! Online Account Transfers is displayed", async ({ page }) => {
  const NOAT = page.getByRole("link", {
    name: "New! Online Account Transfers",
  });
  await page.goto(url);
  await expect(NOAT).toBeVisible();
});

test("Verify read more link 2 is displayed", async ({ page }) => {
  const readMore2 = page.getByRole("link", { name: "Read More" }).last();
  await page.goto(url);
  await expect(readMore2).toBeVisible();
});
