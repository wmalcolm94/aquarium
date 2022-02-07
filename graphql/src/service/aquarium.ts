import axios from 'axios';
import { apiUrl } from '../appsettings.json';
import { Aquarium, AquariumInput, AquariumResponse } from '../schema/aquarium';

async function createAquarium(aquarium: AquariumInput): Promise<AquariumResponse> {
  try {
    return await axios.post(`${apiUrl}/aquariums`, aquarium);
  } catch (err: any) {
    console.log(err.message);
    return { messages: [err.message], success: false, aquarium: undefined };
  }
};

async function deleteAquarium(id: number): Promise<AquariumResponse> {
  try {
    return await axios.delete(`${apiUrl}/aquariums/${id}`);
  } catch (err: any) {
    console.log(err.message);
    return { messages: [err.message], success: false, aquarium: undefined };
  }
};

async function getAquariums(): Promise<Aquarium[]> {
  try {
    return await axios.get(`/aquariums`);
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

async function getAquariumById(id: number): Promise<Aquarium | undefined> {
  try {
    return await axios.get(`/aquariums/${id}`);
  } catch (err: any) {
    console.log(err.message);
    return undefined;
  }
}

async function updateAquarium(id: number, aquarium: AquariumInput): Promise<AquariumResponse> {
  try {
    return await axios.put(`/aquariums/${id}`, aquarium);
  } catch (err: any) {
    console.log(err.message);
    return { messages: [err.message], success: false, aquarium: undefined };
  }
}

export { createAquarium, deleteAquarium, getAquariumById, getAquariums, updateAquarium };