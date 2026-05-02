import { IApiConfig } from "../core/endpoints";
import { SassEndpoints } from "./sass/endpoints";
import { ThemeEndpoints } from "./theme/endpoints";

export const apiConfig:IApiConfig = {
    ...ThemeEndpoints,
    ...SassEndpoints,
}