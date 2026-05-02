import { error500 } from "../../core/express/errors";
import { getBodyParam } from "../../core/express/extractors";
import { HandlerArgs } from "../../core/express/types";
import { CheckPermissions } from "../../uac/permission/util";
import sass from "sass";

export declare interface ICssResult {
    css: string;
}
export declare interface ICompileSassArgs {
    sass: string;
}

class SassHandlerClass {
    @CheckPermissions("sass.compile")
    public async compile(...args:HandlerArgs<ICompileSassArgs>):Promise<ICssResult | undefined> {
        const sassToCompile = getBodyParam<string>("sass")(args);
        try {
            const cssResult = sass.compileString(sassToCompile);
            return {
                css: cssResult.css,
            }
        } catch (e:any) {
            error500(e.message);
        }
    }
}

export const SassHandlers = new SassHandlerClass();
