import type { LatLngTuple } from "leaflet";
import { v4 as uuid } from "uuid";

export interface Location {
  id: string;
  label: string;
  position: LatLngTuple;
}

export interface InputLocation {
  id: string;
  label: string;
  lat: string;
  lng: string;
}

export const makeInputLocation = () => {
  return {
    id: uuid(),
    label: "",
    lat: "",
    lng: "",
  } as InputLocation;
};

export const validateLocation = (input: InputLocation) => {
  if (input.lat === "" || isNaN(Number(input.lat))) return null;
  if (input.lng === "" || isNaN(Number(input.lng))) return null;
  return {
    id: input.id,
    label: input.label,
    position: [Number(input.lat), Number(input.lng)],
  } as Location;
};
