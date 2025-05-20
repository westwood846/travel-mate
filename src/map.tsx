import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import { type LatLngExpression } from "leaflet";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-arrowheads";

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

type Pin = {
  id: string;
  position: LatLngExpression;
  label: string;
};

interface MapViewProps {
  pins: Pin[];
}

export const MapView: React.FC<MapViewProps> = ({ pins }) => {
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

      {pins.map((pin) => (
        <Marker key={pin.id} position={pin.position}>
          <Tooltip permanent>{pin.label}</Tooltip>
        </Marker>
      ))}

      {pins.slice(0, -1).map((pin, i) => {
        const nextPin = pins[i + 1];
        return (
          <ArrowPolyline
            key={`arrow-${pin.id}-${nextPin.id}`}
            positions={[pin.position, nextPin.position]}
          />
        );
      })}
    </MapContainer>
  );
};
