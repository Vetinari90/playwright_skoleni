import { test, expect } from "@playwright/test";

const loginPage = "https://tredgate.com/pmtool";
test("text contain test", async ({ page }) => {
  await page.goto(loginPage);
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");

  await page.locator("button[type=submit]").click();
  await page.waitForURL(
    "https://tredgate.com/pmtool/index.php?module=dashboard/"
  );

  const headerText = await page.locator('h3[id="welcome-page-header"]');
  const expectMessage = "Vítej v testovací aplikaci";

  expect(headerText).toContainText(expectMessage);
});

test("to have text", async ({ page }) => {
  await page.goto(loginPage);
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");

  await page.locator("button[type=submit]").click();
  await page.waitForURL(
    "https://tredgate.com/pmtool/index.php?module=dashboard/"
  );
  const headerText = await page.locator('h3[id="welcome-page-header"]');
  const expectMessage = "Vítej v testovací aplikaci Tredgate Project"; // sensitive na cely text 1 ku 1

  await expect(headerText).toHaveText(expectMessage);
});

test("visible loga", async ({ page }) => {
  await page.goto(loginPage);
  const logo = await page.locator('img[title="TEG Project Management"]');

  await expect(logo, "Logo is visible").toBeVisible();
});

test("toHavValue test", async ({ page }) => {
  await page.goto(loginPage);
  const usernameText = "blbla";
  const inputUsername = page.locator('input[id="username"]');
  await inputUsername.fill(usernameText);

  await expect(inputUsername, "spravna value inputu").toHaveValue(usernameText);
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toBeDisabled test", async ({ page }) => {
  await page.goto("http://tredgate.com/webtrain/registration.html");
  await expect(page.locator("#occupation")).toBeDisabled();
});

test.skip("soft assert", async ({ page }) => {
  await page.goto(loginPage);
  await expect.soft(page.locator('input[id="username"]')).toBeDisabled();

  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");
});

test("negative", async ({ page }) => {
  await page.goto(loginPage);
  await expect(page.locator('input[id="username"]')).toBeVisible();
  await expect(page.locator(".alert")).toBeHidden();
});
