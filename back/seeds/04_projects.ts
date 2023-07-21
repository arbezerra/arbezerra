import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("projects").del();
  await knex("projects").insert([
    {
      id: "0e1cbab7-1536-4e09-8a09-def2e42fa6a2",
      title: "Project Title",
      description: "Description",
      href: "/",
    },
  ]);
}
