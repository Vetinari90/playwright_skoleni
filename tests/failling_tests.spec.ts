import { test, expect } from "@playwright/test";

const loginPage = "https://tredgate.com/pmtool";

test.describe.skip("sada padajcich testu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(loginPage);
  });

  test("spatny input name", async ({ page }) => {
    await page.locator('input[name="username123"]').fill("admin");
  });

  test("spatny assert", async ({ page }) => {
    const title = page.locator(".form-title");
    await expect(title).toHaveText("Přihlášení uživatele");
  });
});
