import { Knex } from "knex";
import { hash } from "../lib/hash";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tags").del();
  await knex("projects").del();
  await knex("posts").del();
  await knex("categories").del();
  await knex("users").del();
}
