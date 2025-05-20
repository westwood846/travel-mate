import type { Connection, Mode } from "./connections";

interface ConnectionInput {
  connection: Connection;
  updateConnection: (connection: Connection) => void;
}

export function ConnectionInput({
  connection,
  updateConnection,
}: ConnectionInput) {
  return (
    <>
      <input
        type="text"
        value={connection.a}
        onChange={(e) => updateConnection({ ...connection, a: e.target.value })}
        size={1}
      />
      <input
        type="text"
        value={connection.b}
        onChange={(e) => updateConnection({ ...connection, b: e.target.value })}
        size={1}
      />
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
      <input
        type="text"
        value={connection.mode}
        onChange={(e) =>
          updateConnection({ ...connection, mode: e.target.value as Mode })
        }
        size={1}
      />
    </>
  );
}
