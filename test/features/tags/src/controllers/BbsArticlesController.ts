import { Controller } from "@nestjs/common";
import typia from "typia";

import { TypedBody, TypedParam, TypedRoute } from "@nestia/core";

import { IBbsArticle } from "@api/lib/structures/IBbsArticle";

@Controller("bbs/articles/:section")
export class BbsArticlesController {
    /**
     * Would be shown without any mark.
     *
     * @tag public
     * @summary Public API
     * @param section Section code
     * @param input Content to store
     * @returns Newly archived article
     */
    @TypedRoute.Post()
    public async store(
        @TypedParam("section") section: string,
        @TypedBody() input: IBbsArticle.IStore,
    ): Promise<IBbsArticle> {
        return {
            ...typia.random<IBbsArticle>(),
            ...input,
            section,
        };
    }

    /**
     * Deprecated API.
     *
     * Would be marked as "deprecated".
     *
     * For reference, top sentence "Deprecated API." can replace the `@summary` tag.
     *
     * @param section Section code
     * @param id Target article ID
     * @param input Content to update
     * @returns Updated content
     *
     * @deprecated
     */
    @TypedRoute.Put(":id")
    public async update(
        @TypedParam("section") section: string,
        @TypedParam("id", "uuid") id: string,
        @TypedBody() input: IBbsArticle.IStore,
    ): Promise<IBbsArticle> {
        return {
            ...typia.random<IBbsArticle>(),
            ...input,
            id,
            section,
        };
    }

    /**
     * Would not be shown.
     *
     * @internal
     */
    @TypedRoute.Delete(":id")
    public erase(
        @TypedParam("section") section: string,
        @TypedParam("id", "uuid") id: string,
    ): void {
        section;
        id;
    }
}
