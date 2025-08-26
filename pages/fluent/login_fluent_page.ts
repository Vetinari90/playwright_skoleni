import { Locator, Page } from "@playwright/test";
import { DashboardFluentPage } from "./dashboard__fluent_page";

export class LoginFluentPage {
  //#region  property
  private readonly page: Page;
  private readonly url = "https://tredgate.com/pmtool";
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  //#endregion

  //#region constructor
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }
  //#endregion

  //#region public methods
  public async login(
    username: string,
    password: string
  ): Promise<DashboardFluentPage> {
    await this.navigateToLoginPage();
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
    return new DashboardFluentPage(this.page);
  }

  public async navigateToLoginPage(): Promise<this> {
    await this.page.goto(this.url);
    return this;
  }

  public async fillUsername(username: string): Promise<this> {
    await this.usernameInput.fill(username);
    return this;
  }

  public async fillPassword(password: string): Promise<this> {
    await this.passwordInput.fill(password);
    return this;
  }

  public async clickLoginButton(): Promise<DashboardFluentPage> {
    await this.loginButton.click();
    return new DashboardFluentPage(this.page);
  }

  //#endregion

  //#region  private methods

  //#endregion
}
