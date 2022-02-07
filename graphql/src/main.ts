import 'reflect-metadata';
import { IncomingHttpHeaders } from 'http';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { AquariumResolver } from './schema/aquarium';

interface Context {
  HttpHeaders: IncomingHttpHeaders;
} 
async function bootstrap() {
  const schema = await buildSchema({ 
    resolvers: [AquariumResolver]
  });

  const apollo = new ApolloServer({ schema });

  apollo.listen(4000, () => console.log('Server started on port 4000'));
}

bootstrap();