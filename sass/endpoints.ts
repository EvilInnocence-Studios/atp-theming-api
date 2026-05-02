import { post } from "../../core/express/wrappers";
import { SassHandlers } from "./handlers";

export const SassEndpoints = {
    "sass": {
        compile: {
            POST: post(SassHandlers.compile)
        }
    }
}