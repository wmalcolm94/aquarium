import { IDataSources } from '../../datasource';
import { AquariumInput } from '../graphql';

const resolverMap = {
    Query: {
        aquariums: async (_parent: any, {}: any, context: { dataSources: IDataSources }) => {
            return await context.dataSources.aquariumService.getAquariums();
        },
        aquarium: async (_parent: any, { id }: any, context: { dataSources: IDataSources }) => {
            return await context.dataSources.aquariumService.getAquariumById(id);
        },
    },
    Mutation: {
      create: async (_parent: any, { createAquarium: input }: any, context: { dataSources: IDataSources }) => {
        const aquarium: AquariumInput = {
          description: input.description,
          size: input.size
        };
        return await context.dataSources.aquariumService.createAquarium(aquarium);
      },
      delete: async (_parent: any, { id }: any, context: { dataSources: IDataSources }) => {
        return await context.dataSources.aquariumService.deleteAquarium(id);
      },
      update: async (_parent: any, { id, input }: any, context: { dataSources: IDataSources }) => {
        const aquarium: AquariumInput = {
          description: input.description,
          size: input.size
        };
        return await context.dataSources.aquariumService.updateAquarium(id, aquarium);
      }
    }
};

export default resolverMap;