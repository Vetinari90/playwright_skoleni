import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

const loginPage = "https://tegb-frontend-88542200c6db.herokuapp.com/";

test("login and test api req", async ({ page, request }) => {
  await page.goto(loginPage);
  const regBtn = await page.getByTestId("register-button");
  await regBtn.click();

  const username = faker.internet.username();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const usernameInput = await page.getByTestId("username-input");
  const emailInput = await page.getByTestId("email-input");
  const passwordInput = await page.getByTestId("password-input");

  await usernameInput.fill(username);
  await emailInput.fill(email);
  await passwordInput.fill(password);

  const responsePromise = page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  );
  const submitBtn = await page.getByTestId("submit-button");
  await submitBtn.click();
  const response = await responsePromise;
  console.log(response);

  // * Testování Request části API register (požadavek)
  const registerRequest = response.request();
  const registerReqBody = await registerRequest.postDataJSON();
  // Testy request body, že data, která jsme zadávali do formuláře jsou stejná i v API requestu
  expect(registerReqBody.email, "registerReqBody.email is correct").toBe(email);
  expect(registerReqBody.password, "registerReqBody.password is correct").toBe(
    password
  );
  expect(registerReqBody.username, "registerReqBody.username is correct").toBe(
    username
  );

  // * Testování Response části API register (odpověď)
  const responseBody = await response.json();
  expect(
    responseBody.username,
    "Register responseBody.username is correct"
  ).toBe(username);
});
