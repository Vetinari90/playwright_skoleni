import { expect, test } from "@playwright/test";

test("assert respons 200 ok", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const responsStatus = response.status();
  const responseBody = await response.body();
  console.log(responseBody.toString());
  const responseHeader = response.headers();
  console.log(responseHeader);
  const heaerType = responseHeader["content-type"];
  console.log(heaerType);
  expect(responsStatus, "get status is 200").toBe(200);
});

test("assert response body", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/400"
  );
  const responsBody = await response.json();
  const userId = responsBody.userId;
  console.log(userId);

  // is not undefined
  expect(userId).toBeDefined();

  // is number
  expect(typeof userId).toBe("number");

  // is exactly 4
  expect(userId).toBe(400);
});
