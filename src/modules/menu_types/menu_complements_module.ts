import { GraphQLModule } from "@graphql-modules/core";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import { MenuTypeModel } from "../../services/menu/domain/entities/menu_models";
import MenuTypesResolver from "./menu_ types_resolver";

let resolvers = [MenuTypesResolver] as const;

const MenuTypesModule = new GraphQLModule({
    providers: [...resolvers],
    extraSchemas: [
      buildSchemaSync({
        resolvers,
        orphanedTypes: [MenuTypeModel],
        container: ({ context }) => MenuTypesModule.injector.getSessionInjector(context),
        skipCheck: true,
        emitSchemaFile: path.resolve(__dirname, "menu-types.schema.gql"),
      }),
    ],
  });
  
  export default MenuTypesModule;
  