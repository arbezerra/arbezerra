import request from "supertest";
import app from "../app";
import pool from "../lib/db";
import User from "../models/user";
import Project from "../models/project";

describe("Project", () => {
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

  test("GET /project 200", async () => {
    return request(app).get("/project").expect(200);
  });

  test("GET /project/:id 200", async () => {
    const project = await pool<Project>("projects").first();
    return request(app).get(`/project/${project!.id}`).expect(200);
  });

  test("POST /project 200", async () => {
    return request(app)
      .post("/project")
      .send({
        title: "Project Title",
        description: "Description",
        href: "https://andrebezerra.com",
      })
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });

  test("PUT /project 200", async () => {
    const Project = await pool<Project>("projects").first();
    return request(app)
      .put(`/project/${Project?.id}`)
      .send({
        title: "Project Title 2",
        description: "Description 2",
        href: "https://andrebezerra.com",
      })
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });

  test("DELETE /project 200", async () => {
    const project = await pool<Project>("projects").first();
    return request(app)
      .delete(`/project/${project!.id}`)
      .set({ Authorization: `Bearer ${token}` })
      .expect(200);
  });
});
