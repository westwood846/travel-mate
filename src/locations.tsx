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

export const isValidLocation = (location: Location) => {
  if (Number.isNaN(location.position[0])) return false;
  if (Number.isNaN(location.position[1])) return false;
  return true;
};
