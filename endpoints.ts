import { IApiConfig } from "../core/endpoints";
import { ThemeEndpoints } from "./theme/endpoints";

export const apiConfig:IApiConfig = {
    ...ThemeEndpoints,
}