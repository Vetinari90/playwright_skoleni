import { test, expect } from "@playwright/test";

const homepagePmTool = "https://tredgate.com/pmtool";

test("cviceni 5", async ({ page }) => {
  await page.goto(homepagePmTool);

  const alertText = "This field is required!";
  const usernameAlert = page.locator('label[id="username-error"]');
  const passwordAlert = page.locator('label[id="password-error"]');
  const buttonLogin = page.locator('button[type="submit"]');

  // 1. Pokus
  await buttonLogin.click();
  await expect(usernameAlert).toBeVisible();
  await expect(usernameAlert).toHaveText(alertText);
  await expect(passwordAlert).toBeVisible();
  await expect(passwordAlert).toHaveText(alertText);
});

test("cviceni 5 - 2", async ({ page }) => {
  await page.goto(homepagePmTool);

  const usernameAlert = page.locator('label[id="username-error"]');
  const passwordAlert = page.locator('label[id="password-error"]');

  // 2. Pokus
  await expect(usernameAlert).not.toBeVisible();
  await expect(passwordAlert).not.toBeVisible();
});
