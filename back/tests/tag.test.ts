import request from "supertest";
import app from "../app";
import pool from "../lib/db";
import Tag from "../models/tag";

describe("Tag", () => {
  let token: string;
  beforeAll(async () => {
    await pool.migrate.latest();
    await pool.seed.run();
    const result = await request(app).post("/auth").send({
      email: "test@cct.ufcg.edu.br",
      password: "123",
    });
    token = result.body.token;
  });
  afterAll(async () => {
    await pool.destroy();
  });

  test("GET /tag 200", async () => {
    return request(app).get("/tag").expect(200);
  });

  test("GET /tag/:id 200", async () => {
    const result = await request(app).get("/tag");
    return request(app).get(`/tag/${result.body[0].id}`).expect(200);
  });

  test("GET /tag/slug/:slug 200", async () => {
    const result = await request(app).get("/tag");
    return request(app)
      .get(`/tag/slug/${result.body[0].slug}`)
      .expect(200);
  });

  test("POST /tag 200", async () => {
    return request(app)
      .post("/tag")
      .send({ name: "Teste", slug: "teste" })
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });

  test("PUT /tag 200", async () => {
    const result = await request(app).get("/tag");
    return request(app)
      .put(`/tag/${result.body[0].id}`)
      .send({ name: "Teste", slug: "teste2" })
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });

  test("DELETE /tag 200", async () => {
    const result = await request(app).get("/tag");
    return request(app)
      .delete(`/tag/${result.body[0].id}`)
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });
});
