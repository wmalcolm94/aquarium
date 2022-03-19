import { v4 as guid } from 'uuid';
import { Aquarium } from './aquarium';

let aquariums: Aquarium[] = [{
    id: 1,
    description: "Nano Betta Tank",
    location: "On top of Mini Fridge"
}, {
    id: 2,
    description: "Community Betta Tank",
    location: "Underneath TV"
}, {
    id: 3,
    description: "20G Community Tank",
    location: "On dresser by bed"
}]

/**
 * Fetches the aquariums
 * @returns A list of the users aquariums
 */
export function getAquariums() {
    return aquariums;
}

/**
 * Adds a new aquarium
 * @param item The proposed new aquarium to add.
 */
export function createAquarium(item: Aquarium) {
    aquariums.push(item);
}

/**
 * Deletes an aquarium from the list.
 * @param id The unique identifier of the aquarium to delete.
 */
export function deleteAquarium(id: number) {
    aquariums = aquariums.filter(x => x.id != id);
}

/**
 * Updates an existing aquarium.
 * @param item The proposed changes to the existing aquarium.
 */
export function updateAquarium(item: Aquarium) {
    const index = aquariums.findIndex(aquarium => aquarium.id == item.id);
    aquariums[index] = item;
}