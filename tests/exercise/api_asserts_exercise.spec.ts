import { expect, test } from "@playwright/test";

test("cviceni 7", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  console.log(response.text());
  const json = await response.json();
  const timestamp = json.timestamp;
  const id = json.id;
  expect(typeof timestamp, "Timestamp is text").toBe("string");

  expect(id, "User id is 1").toBe(1);
});

test("vyzva xz", async ({ request }) => {
  const response = await request.get(
    "https://api.pokemontcg.io/v2/cards/xy1-1"
  );

  const json = await response.json();
  console.log(json);
});
