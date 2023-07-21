import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("tags").insert([
    {
      id: "942b1e1e-3d45-4685-a4eb-6c7860794825",
      name: "Tag",
      slug: "tag",
    },
  ]);
}
