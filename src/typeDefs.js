import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    products: [Product]
  }

  type Product @key(fields: "id") {
    id: ID!
    name: String!
    price: Float
  }
`;

export default typeDefs;
