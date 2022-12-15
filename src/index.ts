import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import * as path from "path";
import {  emitSchemaDefinitionFile } from "type-graphql";
import * as loader from "./loaders/";
import { GraphQLModule } from "@graphql-modules/core";
import MenuModule from "./modules/menu/menu_module";
import AssociatesModule from "./modules/associates/associate.module";
import MenuComplementOptionModule from "./modules/menu_complement_options/menu_complement_option_module";
import MenuComplementsModule from "./modules/menu_complements/menu_complements_module";
import MenuTypesModule from "./modules/menu_types/menu_complements_module";

async function bootstrap() {

  const { schema } = new GraphQLModule({
    imports: [
      AssociatesModule,
      MenuModule,
      MenuComplementsModule,
      MenuComplementOptionModule,
      MenuTypesModule
    ],
  });

  await emitSchemaDefinitionFile(path.resolve(__dirname, "../", "schema.gql"), schema);

  const server = new ApolloServer({
    schema
  });

  await loader.init();

  await server.listen(4000);

  console.log(`Server is running, GraphQL Playground available at zxczxc`);
}

bootstrap();