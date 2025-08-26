import { test, expect } from "@playwright/test";

const loginPage = "https://tredgate.com/pmtool";
test.describe("sada testu", () => {
  test.beforeAll(async ({}) => {
    console.log("Spoustim sadu testu");
  });

  test.beforeEach(async ({ page }) => {
    console.log("Spoustim novy test");
    await page.goto(loginPage);
  });

  test.afterAll(async ({}) => {
    console.log("Dokoncena sada testu");
  });

  test.afterEach(async ({ page }) => {
    console.log("Dokoncen test");
  });

  test("succec login", async ({ page }) => {
    await page.locator('input[id="username"]').fill("playwright_jaro24");
    await page.locator('input[id="password"]').fill("Playwright!2024");

    await page.locator("button[type=submit]").click();
    await page.waitForURL(
      "https://tredgate.com/pmtool/index.php?module=dashboard/"
    );
    const headerText = page.locator('h3[id="welcome-page-header"]');
    const expectMessage = "Vítej v testovací aplikaci Tredgate Project"; // sensitive na cely text 1 ku 1

    await expect(headerText).toHaveText(expectMessage);
  });

  test("failed login", async ({ page }) => {
    await page.goto(loginPage);
    await page.locator('input[id="username"]').fill("playwright_jaro24");
    await page.locator('input[id="password"]').fill("bad_password");

    await page.locator("button[type=submit]").click();

    const alert = page.locator(
      ".alert:has-text('No match for Username and/or Password.')"
    );
    await expect(alert).toBeVisible();
  });
});
