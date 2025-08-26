import { test } from "@playwright/test";

test("login_test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");

  await page.locator("button[type=submit]").click();
  await page.waitForURL(
    "https://tredgate.com/pmtool/index.php?module=dashboard/"
  );
});
