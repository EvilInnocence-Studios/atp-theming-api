import { insertSettings } from "../../../common/migrations/util";
import { database } from "../../../core/database";
import { IMigration } from "../../../core/dbMigrations";
import { insertPermissions, insertRolePermissions } from "../../../uac/migrations/util";
import { themesTable } from "../tables";

const db = database();

const permissions = [
    { name: "theme.view",       description: "Can view themes"   },
    { name: "theme.update",     description: "Can update themes" },
    { name: "theme.create",     description: "Can create themes" },
    { name: "theme.delete",     description: "Can delete themes" },

    { name: "sass.compile",     description: "Can compile sass"  },
];

const rolePermissions = [
    { roleName: "SuperUser", permissionName: "theme.view"   },
    { roleName: "SuperUser", permissionName: "theme.update" },
    { roleName: "SuperUser", permissionName: "theme.create" },
    { roleName: "SuperUser", permissionName: "theme.delete" },
    { roleName: "SuperUser", permissionName: "sass.compile" },
    { roleName: "Public",    permissionName: "theme.view"   },
];

const settings = [
    {key: "themeThumbnailFolder", value: "media/theme"},
]

export const init:IMigration = {
    name: "init",
    module: "theming",
    description: "Install the theming module",
    order: 1,
    version: "1.0.0",
    down: () => {
        return db.schema
            .dropTableIfExists("themes");
    },
    up: () => {
        return db.schema
        .createTable("themes", themesTable);
    },
    initData: async () => {
        await insertPermissions(db, permissions);
        await insertRolePermissions(db, rolePermissions);
        await insertSettings(db, settings);
    },
}
