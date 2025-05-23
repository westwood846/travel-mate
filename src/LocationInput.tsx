import { type InputLocation } from "./locations";

interface LocationInputProps {
  location: InputLocation;
  updateLocation: (location: InputLocation) => void;
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
        value={location.lat}
        onChange={(e) =>
          updateLocation({
            ...location,
            lat: e.target.value,
          })
        }
        size={1}
      />
      <input
        type="text"
        value={location.lng}
        onChange={(e) =>
          updateLocation({
            ...location,
            lng: e.target.value,
          })
        }
        size={1}
      />
    </>
  );
}
