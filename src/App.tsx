import type { LatLngTuple } from "leaflet";
import "./App.css";
import { MapView } from "./map";

const pins = [
  { id: "1", position: [51.505, -0.09] as LatLngTuple, label: "London" },
  { id: "2", position: [48.8566, 2.3522] as LatLngTuple, label: "Paris" },
  { id: "3", position: [52.52, 13.405] as LatLngTuple, label: "Berlin" },
];

function App() {
  return (
    <>
      <h1>Map with Pins</h1>
      <MapView pins={pins} />
    </>
  );
}

export default App;
