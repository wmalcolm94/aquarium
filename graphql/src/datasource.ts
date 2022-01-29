import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { AquariumService } from './service/aquarium';

export interface IDataSources {
  aquariumService: AquariumService
}

function getDataSources(): DataSources<IDataSources> {
  return {
      aquariumService: new AquariumService(),
  };
};

export default getDataSources;