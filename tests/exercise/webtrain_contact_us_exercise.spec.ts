import { test } from "@playwright/test";

test.skip("Contact Us Cvičení", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.waitForURL("https://tredgate.com/webtrain/contact.html");

  await page.locator('input[id="full-name"]').fill("Jaro");
  await page.locator('input[id="email"]').fill("email");
  await page.locator('input[id="date-of-birth"]').fill("2024-06-20");
  await page.locator("select[id=role]").selectOption("student");

  await page.locator('button[type="submit"]').click();
});

test("vyzva3", async ({ page }) => {
  await page.goto("http://tredgate.com/eshop/");
  await page.locator('a[title="My Account"]').click();
  await page.locator('a:has-text("Register")').click();

  await page.waitForURL(
    "https://tredgate.com/eshop/index.php?route=account/register"
  );

  // fill form

  await page.locator('input[type="submit"]').click();
});
