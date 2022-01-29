import { gql } from 'apollo-server';

const aquarium = gql`
  type Aquarium {
    id: ID!
    size: String
    description: String
  }

  type Query {
    aquariums: [Aquarium]
    aquarium(id: ID!): Aquarium
  }

  input AquariumInput {
    size: String
    description: String
  }

  type MutationResponse {
    success: Boolean!
    messages: [String!]
  }

  type AquariumMutationResponse {
    success: Boolean!
    messages: [String!]
    aquarium: Aquarium
  }

  type Mutation {
    create(aquarium: AquariumInput!): AquariumMutationResponse!
    delete(id: ID!): MutationResponse!
    update(aquarium: AquariumInput!): AquariumMutationResponse!
  }
`;

export default aquarium;