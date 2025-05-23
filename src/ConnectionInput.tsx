import { modes, type InputConnection } from "./connections";
import type { Location } from "./locations";

interface ConnectionInput {
  connection: InputConnection;
  updateConnection: (connection: InputConnection) => void;
  locations: Location[];
}

export function ConnectionInput({
  connection,
  updateConnection,
  locations,
}: ConnectionInput) {
  return (
    <>
      <select
        value={connection.a}
        onChange={(e) => updateConnection({ ...connection, a: e.target.value })}
        size={1}
      >
        <option value="" disabled hidden></option>
        {locations.map((location) => (
          <option value={location.id} key={location.id}>
            {location.label}
          </option>
        ))}
      </select>
      <select
        value={connection.b}
        onChange={(e) => updateConnection({ ...connection, b: e.target.value })}
        size={1}
      >
        <option value="" disabled hidden></option>
        {locations.map((location) => (
          <option value={location.id} key={location.id}>
            {location.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={connection.distance}
        onChange={(e) =>
          updateConnection({ ...connection, distance: e.target.value })
        }
        size={1}
      />
      <input
        type="text"
        value={connection.price}
        onChange={(e) =>
          updateConnection({ ...connection, price: e.target.value })
        }
        size={1}
      />
      <input
        type="text"
        value={connection.duration_h}
        onChange={(e) =>
          updateConnection({
            ...connection,
            duration_h: e.target.value,
          })
        }
        size={1}
      />
      <select
        value={connection.mode}
        onChange={(e) =>
          updateConnection({ ...connection, mode: e.target.value })
        }
        size={1}
      >
        <option value="" disabled hidden></option>
        {Object.entries(modes).map(([mode, label]) => (
          <option value={mode} key={mode}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
