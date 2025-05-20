import { type Location } from "./locations";

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
        size={1}
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
        size={1}
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
        size={1}
      />
    </>
  );
}
