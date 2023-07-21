import { Knex } from "knex";
import { hash } from "../lib/hash";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").insert([
        { id: "bd496e9a-dc8a-4d97-9b96-37fc3923eaef", username: "test", firstName: "First", lastName: "Last", email: "test@cct.ufcg.edu.br", password: await hash('123') },
    ]);
};
