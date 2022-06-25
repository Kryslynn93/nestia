import ts from "typescript";

/**
 * Definition for the `nestia.config.ts` file.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IConfiguration {
    /**
     * List of files or directories containing the NestJS controller classes.
     */
    input: string | string[] | IConfiguration.IInput;

    /**
     * Output directory that SDK would be placed in.
     *
     * If not configured, you can't build the SDK library.
     */
    output?: string;

    /**
     * Compiler options for the TypeScript.
     *
     * If you've omitted this property or the assigned property cannot fully cover the
     * `tsconfig.json`, the properties from the `tsconfig.json` would be assigned to here.
     * Otherwise, this property has been configured and it's detailed values are different
     * with the `tsconfig.json`, this property values would be used instead.
     *
     * ```typescript
     * import ts from "typescript";
     *
     * const tsconfig: ts.TsConfig;
     * const nestiaConfig: IConfiguration;
     *
     * const compilerOptions: ts.CompilerOptions = {
     *     ...tsconfig.compilerOptions,
     *     ...(nestiaConfig.compilerOptions || {})
     * }
     * ```
     */
    compilerOptions?: ts.CompilerOptions;

    /**
     * Whether to assert parameter types or not.
     *
     * If you configure this property to be `true`, all of the function parameters would be
     * checked through the [typescript-json](https://github.com/samchon/typescript-json#runtime-type-checkers).
     * This option would make your SDK library slower, but would enahcne the type safety even
     * in the runtime level.
     */
    assert?: boolean;

    /**
     * Whether to optimize JSON string conversion 2x faster or not.
     *
     * If you configure this property to be `true`, the SDK library would utilize the
     * [typescript-json](https://github.com/samchon/typescript-json#fastest-json-string-converter)
     * and the JSON string conversion speed really be 2x faster.
     */
    json?: boolean;

    /**
     * Building `swagger.json` is also possible.
     *
     * If not specified, you can't build the `swagger.json`.
     */
    swagger?: IConfiguration.ISwagger;
}
export namespace IConfiguration {
    /**
     * List of files or directories to include or exclude to specifying the NestJS
     * controllers.
     */
    export interface IInput {
        /**
         * List of files or directories containing the NestJS controller classes.
         */
        include: string[];

        /**
         * List of files or directories to be excluded.
         */
        exclude?: string[];
    }

    /**
     * Building `swagger.json` is also possible.
     */
    export interface ISwagger {
        /**
         * Output path of the `swagger.json`.
         *
         * If you've configured only directory, the file name would be the `swagger.json`.
         * Otherwise you've configured the full path with file name and extension, the
         * `swagger.json` file would be renamed to it.
         */
        output: string;
    }
}
