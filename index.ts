import { init } from "../theming/migrations/00-init";
import { addGlobalStyle } from "../theming/migrations/01-addGlobalStyle";

export { apiConfig } from "./endpoints";
console.log("theming test");
export const themingMigrations = [init, addGlobalStyle];
export const setupMigrations = [init];
