import { test, expect } from "@playwright/test";

const loginPage = "https://tredgate.com/pmtool";

test("cviceni 4", async ({ page }) => {
  await page.goto(loginPage);
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");

  await page.locator("button[type=submit]").click();

  await page.locator('li[id="Projects"]').click();

  const tableRegion = page.locator('div[id="entity_items_listing1907_21"]');
  await expect(tableRegion).toBeVisible();

  await page.locator('[test_id="Add Project"]').click();

  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toHaveText("Save");
});
