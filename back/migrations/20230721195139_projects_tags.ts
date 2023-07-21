import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("projects_tags", (table) => {
      table.uuid("project_id").notNullable().references("projects.id");
      table.uuid("tag_id").notNullable().references("tags.id");
      table.primary(["project_id", "tag_id"])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("projects_tags");
}

