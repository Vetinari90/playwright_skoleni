import { test } from "@playwright/test";

test("prace s IFrame", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");

  //await page.locator('input[id="name"]').fill("bla");
  const frame = page.frameLocator('[data-testid="test-automation-iframe"]');
  await frame.locator('input[id="name"]').fill("bla");
});
