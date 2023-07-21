import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("projects", (table) => {
      table.uuid("id").primary();
      table.string("title").notNullable();
      table.text("description").notNullable();
      table.string("href").notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("projects");
}

