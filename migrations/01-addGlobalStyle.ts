import { database } from "../../core/database";
import { IMigration } from "../../core/dbMigrations";

const db = database();
console.log('test');
export const addGlobalStyle:IMigration = {
    name: "addGlobalStyle",
    module: "theming",
    description: "Add global style to themes",
    order: 2,
    version: "1.0.0",
    up: () => {
        return db.schema.alterTable("themes", (table) => {
            table.json("globalStyles");
        });
    },
    down: () => {
        return db.schema.alterTable("themes", (table) => {
            table.dropColumn("globalStyles");
        });
    },
    initData: async () => {
        
    }
}