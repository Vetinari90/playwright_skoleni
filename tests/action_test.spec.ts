import { test } from "@playwright/test";
import path from "path";

const homepagePmTool = "https://tredgate.com/pmtool";
const pageRegistration = "https://tredgate.com/webtrain/registration.html";
const pageWebAction = "https://tredgate.com/webtrain/web-actions.html";

test("Click with Options", async ({ page }) => {
  await page.goto(homepagePmTool);
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page.locator('input[id="password"]').fill("Playwright!2024");

  await page
    .locator("button[type=submit]")
    .click({ position: { x: 25, y: 25 } });
});

test("fill or press", async ({ page }) => {
  await page.goto(homepagePmTool);
  await page.locator('input[id="username"]').fill("playwright_jaro24");
  await page
    .locator('input[id="username"]')
    .pressSequentially(" neco navic", { delay: 500 });
});

test("select option", async ({ page }) => {
  await page.goto(pageRegistration);
  await page.locator("select[id=gender]").selectOption("male");
});

test("check and uncheck", async ({ page }) => {
  await page.goto(pageRegistration);

  // radiobuttony
  var emailChecked = await page
    .locator('input[id="contact-email"]')
    .isChecked();
  await page.locator('input[id="contact-email"]').isChecked();

  await page.locator('input[id="contact-phone"]').check();

  await page.locator('input[id="contact-phone"]').isChecked();
});

test("date input", async ({ page }) => {
  await page.goto(pageRegistration);

  await page.locator('input[id="date-of-birth"]').fill("2024-06-20");
});

test("upload file", async ({ page }) => {
  await page.goto(pageRegistration);
  const filePath = path.resolve(__dirname, "../assets/upload_test_file.txt");

  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("#file-upload").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(filePath);

  await page.waitForTimeout(2000); //
});

test("slider", async ({ page }) => {
  await page.goto(pageRegistration);

  await page.locator('input[id="experience"]').fill("2");
  await page.locator('input[id="experience"]').fill("4");
  await page.locator('input[id="experience"]').fill("8");
  await page.locator('input[id="experience"]').fill("12"); // error
});

test("mouse hover", async ({ page }) => {
  await page.goto(pageWebAction);
  await page.locator('div[id="hover-box"]').hover();
});
