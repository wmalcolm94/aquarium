import 'graphql-import-node';
import { IncomingHttpHeaders } from 'http';
import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";
import typeDefs from './schema/definition/aquarium';
import resolvers from './schema/resolvers/aquarium';
import getDataSources from './datasource';

interface Context {
  HttpHeaders: IncomingHttpHeaders;
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (request): Promise<Context> => {
    console.log('Context');  
    return {
          HttpHeaders: request?.req?.headers
      };
  },
  dataSources: getDataSources,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

apollo.listen(4000, () => console.log('Server started on port 4000'));