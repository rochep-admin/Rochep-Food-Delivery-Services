import { GraphQLModule } from "@graphql-modules/core";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import { MenuComplementModel } from "../../services/menu/domain/entities/menu_models";
import MenuComplementOptionResolver from "../menu_complement_options/menu_complement_option_resolver";
import { MenuComplementResolver } from "./menu_complements_resolver";

const resolvers = [MenuComplementResolver] as const;

const MenuComplementsModule = new GraphQLModule({
  providers: [...resolvers],
  extraSchemas: [
    buildSchemaSync({
      resolvers,
      orphanedTypes: [MenuComplementModel],
      container: ({ context }) => MenuComplementsModule.injector.getSessionInjector(context),
      skipCheck: true,
      emitSchemaFile: path.resolve(__dirname, "menu-complements.schema.gql"),
    }),
  ],
});

export default MenuComplementsModule;
