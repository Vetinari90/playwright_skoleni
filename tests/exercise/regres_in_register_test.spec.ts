import { expect, test } from "@playwright/test";

test("cviceni 6", async ({ request }) => {
  const data = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  // * Příprava autorizační hlavičky
  const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "content-type": "application/json",
    "x-api-key": "reqres-free-v1",
  };

  await request.post("https://reqres.in/api/register", {
    data: data,
    headers: headers,
  });
});

test("Magic The Gathering API", async ({ request }) => {
  const list = await request.get(
    "https://docs.magicthegathering.io/#api_v1cards_list"
  );
});
