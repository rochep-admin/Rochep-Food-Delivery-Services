import { GraphQLModule } from "@graphql-modules/core";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import { MenuComplementsOptionsModel } from "../../services/menu/domain/entities/menu_models";
import MenuComplementOptionResolver from "./menu_complement_option_resolver";

const resolvers = [MenuComplementOptionResolver] as const;

const MenuComplementOptionModule = new GraphQLModule({
    providers: [...resolvers],
    extraSchemas: [
        buildSchemaSync({
            resolvers,
            orphanedTypes: [MenuComplementsOptionsModel],
            container: ({ context }) => MenuComplementOptionModule.injector.getSessionInjector(context),
            skipCheck: true,
            emitSchemaFile: path.resolve(__dirname, "menu-options.schema.gql"),
        }),
    ],
});

export default MenuComplementOptionModule;
