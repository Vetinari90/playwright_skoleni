import { test, expect } from "@playwright/test";

const homepage = " https://automationteststore.com/";

test("cviceni 5 - 3 vyzva", async ({ page }) => {
  await page.goto(homepage);

  const custoerNav = page.locator('ul[id="customer_menu_top"]');

  await custoerNav.click();
  await page.waitForURL(
    "https://automationteststore.com/index.php?rt=account/login"
  );

  const alert = await page.locator(
    ".alert:has-text('Warning: No match for E-Mail Address and/or Password.')"
  );
  await expect(alert).not.toBeVisible();
});
