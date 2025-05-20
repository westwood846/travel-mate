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

export const updateLocationInList = (
  locations: Location[],
  location: Location
) => {
  const index = locations.findIndex((l) => l.id === location.id);
  if (index === -1) return locations;
  const newLocations = [...locations];
  newLocations[index] = location;
  return newLocations;
};

interface LocationInputProps {
  location: Location;
  updateLocation: (location: Location) => void;
}

export function LocationInput({
  location,
  updateLocation,
}: LocationInputProps) {
  return (
    <>
      <input
        type="text"
        value={location.label}
        onChange={(e) => updateLocation({ ...location, label: e.target.value })}
      />
      <input
        type="text"
        value={location.position[0]}
        onChange={(e) =>
          updateLocation({
            ...location,
            position: [Number(e.target.value), location.position[1]],
          })
        }
      />
      <input
        type="text"
        value={location.position[1]}
        onChange={(e) =>
          updateLocation({
            ...location,
            position: [location.position[0], Number(e.target.value)],
          })
        }
      />
    </>
  );
}
