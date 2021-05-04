import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import debug from "debug";

import dataSources from "./datasources";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const dbug = debug("graphql-products:server");

const server = new ApolloServer({
  dataSources,
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
});

server.listen().then(({ url }) => {
  dbug(`🚀  Server ready at ${url}`);
});
