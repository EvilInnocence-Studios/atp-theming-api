import { FieldRegistry } from "../core/express/util";
import { init } from "../theming/migrations/00-init";
import { addGlobalStyle } from "../theming/migrations/01-addGlobalStyle";

export { apiConfig } from "./endpoints";

export const themingMigrations = [init, addGlobalStyle];
export const setupMigrations = [init];

FieldRegistry.register(
    "themes", {
        create: ["name", "description", "imageUrl", "globalStyles", "json", "enabled"],
        update: ["name", "description", "imageUrl", "globalStyles", "json", "enabled"],
    }
);
