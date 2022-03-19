import { FishList } from "../fish/fish-list.component";
import { Aquarium } from "./aquarium";
import { deleteAquarium } from "./aquarium-service";

export const AquariumDetails = ({ id, description, location }: Aquarium) => {
    
    const handleClick = () => {
        deleteAquarium(id);
    }

    const aquarium = { id, description, location };
    return (
        <div>
            <h3>{description}</h3>
            <p>Location: {location}</p>
            <FishList { ...aquarium }/>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}