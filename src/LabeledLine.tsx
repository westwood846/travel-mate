import { useEffect, useRef } from "react";
import { Polyline } from "react-leaflet";
import L, { Layer, type LatLngExpression } from "leaflet";

interface LabeledLineProps {
  positions: LatLngExpression[];
  label: Parameters<typeof Layer.prototype.bindTooltip>[0];
}

export const LabeledLine: React.FC<LabeledLineProps> = ({
  positions,
  label,
}) => {
  const polylineRef = useRef<L.Polyline>(null);

  useEffect(() => {
    if (polylineRef.current) {
      polylineRef.current.bindTooltip(label, {
        permanent: true,
        direction: "center",
        className: "polyline-label",
        offset: L.point(0, 0),
      });
    }
  }, [label]);

  return (
    <Polyline
      ref={polylineRef}
      positions={positions}
      pathOptions={{ color: "blue", weight: 3 }}
    />
  );
};
