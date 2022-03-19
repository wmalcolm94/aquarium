import { Aquarium } from "../aquarium/aquarium";
import { getAquariumFish } from "./fish-service";

export const FishList = (aquarium: Aquarium)  => {
    console.log(JSON.stringify(aquarium.id));
    const fish = getAquariumFish(aquarium.id);

    const renderedFish = Object.values(fish).map((item) => {
        return (
            <div>
                <p>{item.species} - { item.name !== null ? item.name : item.quantity }</p>
            </div>
        );
    });
    return (<div>{renderedFish}</div>);
}