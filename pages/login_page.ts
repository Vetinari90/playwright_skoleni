import { Locator, Page } from "@playwright/test";

export class LoginPage {
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
  public async login(username: string, password: string): Promise<void> {
    await this.navigateToLoginPage();
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  //#endregion

  //#region  private methods
  private async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.url);
  }

  private async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  private async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  private async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  //#endregion
}
