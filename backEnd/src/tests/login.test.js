const request = require("supertest");
const app = require("../app.js");
const jwt = require("jsonwebtoken");
const path = require("path");
const { User } = require("../database/models");
const supertest = require("supertest");

describe("POST /users/login", () => {
  const registeredUser = {
    email: "dhannis0@quantcast.com",
    password: "12345678Mw",
  };
  const unregisteredUser = {
    email: "marcos0@cualquiercosa.com",
    password: "12345678Mw",
  };

  function VerifyToken(token) {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
  }

  test("login with an unregistered user", async () => {
    const response = await supertest(app).post("/users/login").send(unregisteredUser);
    expect(response.header["content-type"]).toEqual(expect.stringContaining("json"));
    expect(response.statusCode).toBe(401);
  });

  test("login with a registered user but with an incorrect password", async () => {
    const response = await supertest(app).post("/users/login").send({ email: registeredUser.email, password: "incorrectPasword" });
    expect(response.header["content-type"]).toEqual(expect.stringContaining("json"));
    expect(response.statusCode).toBe(401);
  });

  test("login with a registered user", async () => {
    const response = await supertest(app).post("/users/login").send(registeredUser);
    const user = await User.findOne({ where: { email: registeredUser.email } });
    //I use the instance of my User model to search for that emial that is registered
    expect(response.header["content-type"]).toEqual(expect.stringContaining("json"));
    expect(response.statusCode).toBe(200);
    expect(VerifyToken(response.body.data.accessToken).id).toBe(user.id);
    expect(response.body.data.username).toBe(user.nickName);
    expect(response.body.data.avatar).toBe(user.avatar);
  });
});
