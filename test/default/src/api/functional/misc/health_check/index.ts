/**
 * @packageDocumentation
 * @module api.functional.misc.health_check
 */
//================================================================
import { AesPkcs5 } from "./../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../__internal/Fetcher";
import { Primitive } from "./../../../Primitive";
import type { IConnection } from "./../../../IConnection";




/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller HealthCheckController.get()
 * @path GET /misc/health-check
 */
export function get
    (
        connection: IConnection
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        get.CONFIG,
        get.METHOD,
        get.path()
    );
}
export namespace get
{

    export const METHOD = "GET" as const;
    export const PATH: string = "/misc/health-check";
    export const CONFIG = {
        input_encrypted: false,
        output_encrypted: false,
    };

    export function path(): string
    {
        return `/misc/health-check`;
    }
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller HealthCheckController.sleep_for()
 * @path GET /misc/health-check/sleep-for/:ms
 */
export function sleep_for
    (
        connection: IConnection,
        ms: number
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        sleep_for.CONFIG,
        sleep_for.METHOD,
        sleep_for.path(ms)
    );
}
export namespace sleep_for
{

    export const METHOD = "GET" as const;
    export const PATH: string = "/misc/health-check/sleep-for/:ms";
    export const CONFIG = {
        input_encrypted: false,
        output_encrypted: false,
    };

    export function path(ms: number): string
    {
        return `/misc/health-check/sleep-for/${ms}`;
    }
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller HealthCheckController.print()
 * @path POST /misc/health-check/print
 */
export function print
    (
        connection: IConnection,
        value: Primitive<print.Input>
    ): Promise<print.Output>
{
    return Fetcher.fetch
    (
        connection,
        print.CONFIG,
        print.METHOD,
        print.path(),
        value
    );
}
export namespace print
{
    export type Input = Primitive<string>;
    export type Output = Primitive<string>;


    export const METHOD = "POST" as const;
    export const PATH: string = "/misc/health-check/print";
    export const CONFIG = {
        input_encrypted: false,
        output_encrypted: false,
    };

    export function path(): string
    {
        return `/misc/health-check/print`;
    }
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;