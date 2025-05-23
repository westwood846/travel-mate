import { Polyline } from "react-leaflet";
import L, { type LatLngExpression } from "leaflet";

import { Marker } from "react-leaflet";

const midpoint = (
  p1: LatLngExpression,
  p2: LatLngExpression
): LatLngExpression => {
  const lat = ((p1 as [number, number])[0] + (p2 as [number, number])[0]) / 2;
  const lng = ((p1 as [number, number])[1] + (p2 as [number, number])[1]) / 2;
  return [lat, lng];
};

export const LabelMarker = ({
  labels,
  position,
}: {
  labels: string[];
  position: LatLngExpression;
}) => (
  <Marker
    position={position}
    icon={L.divIcon({
      html: `<div class="polyline-label">${labels
        .map((label) => `<div>${label}</div>`)
        .join("")}</div>`,
      className: "",
      iconAnchor: [0, 0],
    })}
  />
);

interface LabeledLineProps {
  positions: LatLngExpression[];
  labels: string[];
}

export const LabeledLine: React.FC<LabeledLineProps> = ({
  positions,
  labels,
}) => {
  return (
    <>
      <Polyline
        positions={positions}
        pathOptions={{ color: "blue", weight: 3 }}
      />
      <LabelMarker
        labels={labels}
        position={midpoint(positions[0], positions[1])}
      />
    </>
  );
};
