import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-arrowheads";
import type { Location } from "./locations";
import { connKey, type Connection } from "./connections";

const ArrowPolyline = ({ positions }: { positions: L.LatLngExpression[] }) => {
  const ref = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (ref.current && "arrowheads" in ref.current) {
      ref.current.arrowheads({
        frequency: "endonly",
        size: "10px",
        yawn: 60,
        fill: true,
      });
    }
  }, []);

  return (
    <Polyline
      ref={ref}
      positions={positions}
      pathOptions={{ color: "red", weight: 3 }}
    />
  );
};
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
          <ArrowPolyline
            key={`arrow-${connKey(conn)}`}
            positions={[locationA.position, locationB.position]}
          />
        );
      })}
    </MapContainer>
  );
};
