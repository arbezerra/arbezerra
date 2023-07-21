import request from "supertest";
import app from "../app";
import pool from "../lib/db";
import Project from "../models/project";
import Tag from "../models/tag";

describe("ProjectsTags", () => {
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

  test("PUT /project/tag/:id tag 200", async () => {
    const project = await pool<Project>("projects").first();
    const tag = await pool<Tag>("tags").first();
    return request(app)
      .put(`/project/tag/${project!.id}`)
      .send({ tag_id: tag!.id, active: true })
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });

  test("PUT /project/tag/:id untag 200", async () => {
    const project_tag = await pool("projects_tags").first();
    return request(app)
      .put(`/project/tag/${project_tag!.project_id}`)
      .send({ tag_id: project_tag!.tag_id, active: false })
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });
});
