import { AquariumDetails } from './aquarium-details.component';
import { getAquariums } from './aquarium-service';

/**
 * Shows the inital Aquarium Dashboard.
 * @returns An ordered list of the users aquariums to render in the UI
 */
export const AquariumList = () => {
    const aquariums = getAquariums();
    
    const renderedAquariums = Object.values(aquariums).map((aquarium) => {
        return (
            <div
                className="card"
                style={{ width: "30%", marginBottom: "20px" }}
                key={aquarium.id}
            >
                <div className="card-body">
                    <AquariumDetails { ...aquarium } />
                </div>
            </div>
        )
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
          {renderedAquariums}
        </div>
      );
};