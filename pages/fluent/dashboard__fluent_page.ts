import { Locator, Page, expect, test } from "@playwright/test";
import { LoginFluentPage } from "./login_fluent_page";

export class DashboardFluentPage {
  //#region  property
  private readonly page: Page;
  private readonly bellIcon: Locator;
  private readonly welcomeMessage: Locator;
  private readonly userNavButton: Locator;
  private readonly logoutButton: Locator;
  //#endregion

  //#region constructor
  constructor(page: Page) {
    this.page = page;
    this.bellIcon = page.locator('li[id="user_notifications_report"]');
    this.welcomeMessage = page.locator('h3[id="welcome-page-header"]');
    this.userNavButton = page.locator('li[id="user_dropdown"]');
    this.logoutButton = page.locator('li[id="logout"]');
  }
  //#endregion

  //#region public methods
  public async verifyWelcomeMessage(): Promise<this> {
    await this.waitForWelcomeMessageIsVisible();
    await this.expectWelcomeMessageIsCorrect();
    return this;
  }

  public async logout(): Promise<LoginFluentPage> {
    await test.step("step na logout", async () => {
      await this.waitForBellIconIsVisible();
      await this.expectBellIconIsVisible();
      await this.clickUserNavButton();
      await this.clickLogoutButton();
    });
    return new LoginFluentPage(this.page);
  }

  //#endregion

  //#region  private methods
  private async waitForWelcomeMessageIsVisible(): Promise<void> {
    await this.welcomeMessage.waitFor({ state: "visible" });
  }

  private async expectWelcomeMessageIsCorrect(): Promise<void> {
    await expect(this.welcomeMessage).toHaveText(
      "Vítej v testovací aplikaci Tredgate Project"
    );
  }

  private async clickUserNavButton(): Promise<void> {
    await this.userNavButton.click();
  }

  private async clickLogoutButton(): Promise<void> {
    await this.logoutButton.click();
  }

  private async waitForBellIconIsVisible(): Promise<void> {
    await this.bellIcon.waitFor({ state: "visible" });
  }

  private async expectBellIconIsVisible(): Promise<void> {
    await expect(this.bellIcon).toBeVisible();
  }
}
