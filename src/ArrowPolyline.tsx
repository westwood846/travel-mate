import { useEffect, useRef } from "react";
import L from "leaflet";
import { Polyline } from "react-leaflet";

export const ArrowPolyline = ({
  positions,
}: {
  positions: L.LatLngExpression[];
}) => {
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
