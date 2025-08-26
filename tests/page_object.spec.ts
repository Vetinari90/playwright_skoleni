import { test, expect } from "@playwright/test";
import { DashboardFluentPage } from "../pages/fluent/dashboard__fluent_page";
import { LoginFluentPage } from "../pages/fluent/login_fluent_page";
import { LoginPage } from "../pages/login_page";
import { DashboardPage } from "../pages/dashboard_page";

test.describe("", () => {
  let username = "playwright_jaro24";
  let password = "Playwright!2024";

  test("test page object", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.login(username, password);

    await dashboardPage.verifyWelcomeMessage();

    await dashboardPage.logout();
  });

  test("test fluent page", async ({ page }) => {
    const loginFluentPage = new LoginFluentPage(page);
    //const dashboardFluentPage = new DashboardFluentPage(page); neni to tu treba

    await loginFluentPage
      .navigateToLoginPage()
      .then((login) => login.fillUsername(username))
      .then((login) => login.fillPassword(password))
      .then((login) => login.clickLoginButton())
      .then((dashboard) => dashboard.verifyWelcomeMessage())
      .then((dashboard) => dashboard.logout());
  });
});
