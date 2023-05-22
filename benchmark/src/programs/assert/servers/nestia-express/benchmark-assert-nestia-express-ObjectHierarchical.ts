import { Controller } from "@nestjs/common";

import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectHierarchical } from "../../../../structures/pure/ObjectHierarchical";
import { createNestExpressAssertProgram } from "../createNestExpressAssertProgram";

createNestExpressAssertProgram(false)(37_011)(() => {
    @Controller()
    class NestiaController {
        @core.TypedRoute.Post("assert")
        public assert(@core.TypedBody() input: Collection<ObjectHierarchical>): void {
            input;
        }
    }
    return NestiaController;
});