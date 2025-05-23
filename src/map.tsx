import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

import "leaflet-arrowheads";
import type { Location } from "./locations";
import { modes, type Connection } from "./connections";
import { LabeledLine } from "./LabeledLine";

interface MapViewProps {
  locations: Location[];
  connections: Connection[];
}

export const MapView: React.FC<MapViewProps> = ({ locations, connections }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc) => (
        <Marker key={loc.id} position={loc.position}>
          <Tooltip permanent>{loc.label}</Tooltip>
        </Marker>
      ))}

      {connections.map((conn) => {
        const locationA = locations.find((l) => l.id === conn.a);
        const locationB = locations.find((l) => l.id === conn.b);
        if (!locationA || !locationB) throw new Error("Unknown location");
        return (
          <LabeledLine
            key={`arrow-${conn.id}`}
            positions={[locationA.position, locationB.position]}
            labels={[
              modes[conn.mode],
              `${conn.distance || "?"} km, ${conn.duration_h || "?"} hrs, $${
                conn.price || "?"
              }`,
            ]}
          />
        );
      })}
    </MapContainer>
  );
};
