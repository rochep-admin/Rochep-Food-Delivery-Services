

import { GraphQLModule } from "@graphql-modules/core";
import path from "path";
import { buildSchemaSync } from "type-graphql";
import { AssociateModel } from "../../services/associates/domain/entities/associate_models";
import { AssociateResolver } from "./associates.resolver";

const resolvers = [AssociateResolver] as const;

const AssociatesModule = new GraphQLModule({
  providers: [...resolvers],
  extraSchemas: [
    buildSchemaSync({
      resolvers,
      orphanedTypes: [AssociateModel],
      container: ({ context }) => AssociatesModule.injector.getSessionInjector(context),
      skipCheck: true,
      emitSchemaFile: path.resolve(__dirname, "associate.schema.gql"),
    }),
  ],
});

export default AssociatesModule;