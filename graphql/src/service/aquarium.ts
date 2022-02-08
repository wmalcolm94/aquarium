import axios from 'axios';
import { apiUrl } from '../appsettings.json';
import { Aquarium, AquariumInput, AquariumResponse } from '../schema/aquarium';

async function createAquarium(aquarium: AquariumInput): Promise<AquariumResponse> {
  try {
    const result = await axios.post(`${apiUrl}/aquariums`, aquarium);
    return { success: true, messages: [], aquarium: await getAquariumById(result.data.id) };
  } catch (err: any) {
    console.log(err.message);
    return { messages: [err.message], success: false, aquarium: undefined };
  }
};

async function deleteAquarium(id: number): Promise<AquariumResponse> {
  try {
    await axios.delete(`${apiUrl}/aquariums/${id}`);
    return { success: true, messages: [], aquarium: undefined };
  } catch (err: any) {
    console.log(err.message);
    return { messages: [err.message], success: false, aquarium: undefined };
  }
};

async function getAquariums(): Promise<Aquarium[]> {
  try {
    const result = await axios.get(`${apiUrl}/aquariums`);
    return result.data as Aquarium[];
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

async function getAquariumById(id: number): Promise<Aquarium | undefined> {
  try {
    const result = await axios.get(`${apiUrl}/aquariums/${id}`);
    if (!result || result.data) {
      return undefined;
    }

    return result.data as Aquarium;
  } catch (err: any) {
    console.log(err.message);
    return undefined;
  }
}

async function updateAquarium(id: number, aquarium: AquariumInput): Promise<AquariumResponse> {
  try {
    const result = await axios.put(`${apiUrl}/aquariums/${id}`, aquarium);
    console.log(result.data);
    return { success: true, messages: [], aquarium: await getAquariumById(result.data.id) };
  } catch (err: any) {
    console.log(err.message);
    return { messages: [err.message], success: false, aquarium: undefined };
  }
}

export { createAquarium, deleteAquarium, getAquariumById, getAquariums, updateAquarium };