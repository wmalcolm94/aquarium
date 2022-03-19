import { Colour } from "../common/colour";

export interface Fish {
    /**
     * unique identifier of the fish.
     */
    id: number;

    /**
     * The unique identifier of the aquarium the fish is in.
     */
    aquariumId: number;

    /**
     * Name for the fish (optional)
     */
    name: string | null;

    /**
     * Indicates what kind of species the fish is.
     */
    species: string;

    /**
     * The colour(s) of the fish
     */
    colour: Colour[];

    /**
     * For "nameless" fish, can enter the quantity instead.
     */
    quantity: number | null;
}