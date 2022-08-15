import request from "supertest";
import app from "../app";

let server = null;

beforeAll(() => {
  const { PORT = 4000 } = process.env;

  server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});

describe("Get route", () => {
  it("page should return hello world", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
  });
  it("page should return hello world", async () => {
    const res = await request(server).get("/api/v1/message");
    // console.log(res);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Special Message");
  });
});

afterAll(async () => {
  await server.close();
});