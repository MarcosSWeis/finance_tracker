const request = require("supertest");
const app = require("../app.js");

describe("POST /users/register", () => {
  test("should respond with a 200 status code and status boolean true", async () => {
    const response = await request(app).post("/users/register").send({});
    expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe(true);
  });
});
