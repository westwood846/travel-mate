import { modes, type Connection, type Mode } from "./connections";
import type { Location } from "./locations";

interface ConnectionInput {
  connection: Connection;
  updateConnection: (connection: Connection) => void;
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
        {locations.map((location) => (
          <option value={location.id} key={location.id}>
            {location.label}
          </option>
        ))}
      </select>
      <select
        value={connection.b}
        onChange={(e) => updateConnection({ ...connection, a: e.target.value })}
        size={1}
      >
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
          updateConnection({ ...connection, distance: Number(e.target.value) })
        }
        size={1}
      />
      <input
        type="text"
        value={connection.price}
        onChange={(e) =>
          updateConnection({ ...connection, price: Number(e.target.value) })
        }
        size={1}
      />
      <input
        type="text"
        value={connection.duration_h}
        onChange={(e) =>
          updateConnection({
            ...connection,
            duration_h: Number(e.target.value),
          })
        }
        size={1}
      />
      <select
        value={connection.mode}
        onChange={(e) =>
          updateConnection({ ...connection, mode: e.target.value as Mode })
        }
        size={1}
      >
        {Object.entries(modes).map(([mode, label]) => (
          <option value={mode} key={mode}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
