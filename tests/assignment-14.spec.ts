import { test, expect } from "@playwright/test";

const url: string = "https://parabank.parasoft.com/parabank/index.htm";

test("Assignment 14", async ({ page }) => {
  // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
  await page.goto(url);

  //   2.verify application logo is displayed
  const logo = await page.locator('//img[@alt="ParaBank"]');
  await expect(logo).toBeVisible();

  //   3.Verify application caption displayed as "Experience the difference"
  const caption = await page.locator("div#topPanel p").textContent();
  await expect(caption).toBe("Experience the difference");

  //   4.Enter invalid username
  const userNmmeTextBox = page.locator('//input[@name="username"]');
  await userNmmeTextBox.fill("invalid username");

  //   4.Enter Enter empty Password
  const passwordTextBox = page.locator('//input[@name="password"]');
  await passwordTextBox.fill("");

  //   6.Click on login button
  const loginBtn = page.locator('//input[@value="Log In"]');
  await loginBtn.click();

  //   7.Verify the error message "Please enter a username and password."
  const errorMessage = await page
    .locator('//div[@id="rightPanel"]/p')
    .textContent();
  console.log(errorMessage);
  expect(errorMessage).toBe("Please enter a username and password.");

  //   8.Click on admin page link
  const adminLink = page.locator('//a[text()="Admin Page"]');
  await adminLink.click();

  //   9.select the option "soap" from dba mode radio button
  const soapRadioBtn = page.locator("input#accessMode1");
  await soapRadioBtn.check();
  await expect(soapRadioBtn).toBeChecked();

  //   10.Scroll to element dropdown

  const loanProviderOption = page.locator("select#loanProvider");
  await loanProviderOption.scrollIntoViewIfNeeded();
  await loanProviderOption.selectOption({ value: "ws" });
  await expect(loanProviderOption).toHaveValue("ws");

  //   12.click on submit button
  const submitBtn = page.locator('//input[@value="Submit"]');
  await submitBtn.click();

  //   13.verify submission is successful by validating success message
  const successMessage = await page.locator("div#rightPanel p b").textContent();
  await expect(successMessage).toBe("Settings saved successfully.");

  //   14.Click on services page link
  const servicePageLink = page.locator(
    '//ul[@class="leftmenu"]/li/a[text()="Services"]',
  );
  await servicePageLink.click();

  //   15.wait for service page
  await page.waitForLoadState("load");

  //   16.Scroll down till bookstore services table
  const bookStoreServices = page.locator(
    '//span[text()="Bookstore services:"]',
  );
  await bookStoreServices.scrollIntoViewIfNeeded();

  //   17.get total rows of books store services table
  const rowsOfBookStoreServices = page.locator(
    '//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr',
  );

  const rowsOfBookStoreServicesCount = await rowsOfBookStoreServices.count();
  const rowsOfBookStoreServicesAllTextContents =
    await rowsOfBookStoreServices.allTextContents();

  // 18.get total columns of books store services table

  const columnsOfBookStoreServices = page.locator(
    '//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr/td',
  );

  const columnsOfBookStoreServicesAllTextContents =
    await columnsOfBookStoreServices.allTextContents();
  console.log(columnsOfBookStoreServicesAllTextContents);

  //   await page.pause();
});
