import { test } from "@playwright/test";

test("Otevři projekty v PMToo", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");

  await page
    .locator("button[type=submit]")
    .click({ position: { x: 25, y: 25 } });

  await page.waitForURL(
    "https://tredgate.com/pmtool/index.php?module=dashboard/"
  );

  await page.locator('li[id="Projects"]').click();
});
