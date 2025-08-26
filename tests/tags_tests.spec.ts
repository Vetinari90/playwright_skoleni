import { test, expect } from "@playwright/test";

const loginPage = "https://tredgate.com/pmtool";
const webtrainPage = "http://tredgate.com/webtrain/registration.html";

test.describe("sada testu", { tag: "@describe_tag" }, () => {
  test("test tags prvni", { tag: "@prvni_tag" }, async ({ page }) => {
    await page.goto(loginPage);
  });

  test("test tags druhy", { tag: "@druhy_tag" }, async ({ page }) => {
    await page.goto(webtrainPage);
  });
});
