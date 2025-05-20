import type { LatLngTuple } from "leaflet";
import { v4 as uuid } from "uuid";

export interface Location {
  id: string;
  label: string;
  position: LatLngTuple;
}

export const makeEmptyLocation = () => {
  return {
    id: uuid(),
    label: "",
    position: [NaN, NaN],
  } as Location;
};
