import { Colour } from "../common/colour";
import { Fish } from "./fish";

let fish: Fish[] = [{
    id: 1,
    aquariumId: 2,
    name: 'Leopold',
    species: 'Betta',
    colour: [Colour.Red, Colour.Blue, Colour.White],
    quantity: null
},{
    id: 2,
    aquariumId: 2,
    name: null,
    species: 'Salt and Pepper Corydora',
    colour: [Colour.Grey, Colour.White, Colour.Black],
    quantity: 2
},{
    id: 3,
    aquariumId: 2,
    name: null,
    species: 'Albino Corydora',
    colour: [Colour.White],
    quantity: 2
}];

export function getAquariumFish(aquariumId: number) {
    return fish.filter(x => x.aquariumId == aquariumId);
}