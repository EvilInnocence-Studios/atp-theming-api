import { Knex } from "knex";

 export const themesTable = (table:Knex.TableBuilder) => {
    table.bigIncrements();
    table.string("name").notNullable();
    table.text("description");
    table.string("imageUrl");
    table.json("globalStyles");
    table.json("json");
    table.boolean("enabled").notNullable().defaultTo(false);
 }