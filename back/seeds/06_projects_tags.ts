import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("projects_tags").insert([
    {
      tag_id: "942b1e1e-3d45-4685-a4eb-6c7860794825",
      project_id: "0e1cbab7-1536-4e09-8a09-def2e42fa6a2",
    },
  ]);
}
