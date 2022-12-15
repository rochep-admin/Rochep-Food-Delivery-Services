
// const injectables = [AssociateController, AssociateRepository, AssociatePgDataSource] as const;

import { GraphQLModule } from "@graphql-modules/core";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import { MenuModel } from "../../services/menu/domain/entities/menu_models";
import { MenuResolver } from "./menu_resolver";

const resolvers = [MenuResolver] as const;

const MenuModule = new GraphQLModule({
  providers: [...resolvers],
  extraSchemas: [
    buildSchemaSync({
      resolvers,
      orphanedTypes: [MenuModel],
      container: ({ context }) => MenuModule.injector.getSessionInjector(context),
      skipCheck: true,
      emitSchemaFile: path.resolve(__dirname, "menu.schema.gql"),
    }),
  ],
});

export default MenuModule;
