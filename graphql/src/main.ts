import 'graphql-import-node';
import { IncomingHttpHeaders } from 'http';
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/definition/aquarium';
import resolvers from './schema/resolvers/aquarium';
import getDataSources from './datasource';

interface Context {
  HttpHeaders: IncomingHttpHeaders;
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  // context: async (request): Promise<Context> => {
  //   console.log('Context', request);  
  //   return {
  //         HttpHeaders: request?.req?.headers
  //   };
  // },
  dataSources: getDataSources
});

apollo.listen(4000, () => console.log('Server started on port 4000'));