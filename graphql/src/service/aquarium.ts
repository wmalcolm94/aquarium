import { RESTDataSource } from "apollo-datasource-rest";
import { apiUrl } from '../appsettings.json';
import { Aquarium, AquariumInput, AquariumMutationResponse, MutationResponse } from '../schema/graphql';

export class AquariumService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = apiUrl;
  }

  createAquarium(aquarium: AquariumInput): Promise<AquariumMutationResponse> {
    return this.post(`/aquariums`, aquarium);
  }

  deleteAquarium(id: string): Promise<MutationResponse> {
    return this.delete(`/aquariums/${id}`);
  }

  getAquariums(): Promise<Aquarium[]> {
    return this.get(`/aquariums`);
  }

  getAquariumById(id: string): Promise<Aquarium> {
    return this.get(`/aquariums/${id}`);
  }

  updateAquarium(id: string, aquarium: AquariumInput): Promise<AquariumMutationResponse> {
    return this.put(`/aquariums/${id}`, aquarium);
  }
}