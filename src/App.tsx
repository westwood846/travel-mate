import type { LatLngTuple } from "leaflet";
import "./App.css";
import { MapView } from "./map";
import { LocationInput } from "./LocationInput";
import { type Location } from "./locations";
import { Fragment, useState } from "react";
import { updateListById } from "./util";
import { ConnectionInput } from "./ConnectionInput";
import { type Connection } from "./connections";

const sampleLocations = [
  { id: "1", position: [51.505, -0.09] as LatLngTuple, label: "London" },
  { id: "2", position: [48.8566, 2.3522] as LatLngTuple, label: "Paris" },
  { id: "3", position: [52.52, 13.405] as LatLngTuple, label: "Berlin" },
] as Location[];

const sampleConnections = [
  {
    id: "1",
    a: "1",
    b: "2",
    distance: 500,
    price: 100,
    duration_h: 2,
    mode: "TRAIN",
  },
  {
    id: "2",
    a: "1",
    b: "3",
    distance: 1000,
    price: 200,
    duration_h: 5,
    mode: "PLANE",
  },
  {
    id: "3",
    a: "2",
    b: "3",
    distance: 300,
    price: 20,
    duration_h: 1,
    mode: "TRAIN",
  },
] as Connection[];

function App() {
  const [locations, setLocations] = useState(sampleLocations);
  const [connections, setConnections] = useState(sampleConnections);

  return (
    <>
      <div className="inputs">
        <div className="locations">
          <div className="inputs-label">Label</div>
          <div className="inputs-label">Latitude</div>
          <div className="inputs-label">Longitude</div>
          {locations.map((location) => (
            <Fragment key={location.id}>
              <LocationInput
                location={location}
                updateLocation={(location) =>
                  setLocations(updateListById(locations, location))
                }
              />
            </Fragment>
          ))}
        </div>
        <div className="connections">
          <div className="inputs-label">a</div>
          <div className="inputs-label">b</div>
          <div className="inputs-label">Distance</div>
          <div className="inputs-label">Price</div>
          <div className="inputs-label">Duration</div>
          <div className="inputs-label">Mode</div>
          {connections.map((connection) => (
            <Fragment key={connection.id}>
              <ConnectionInput
                connection={connection}
                updateConnection={(connection) =>
                  setConnections(updateListById(connections, connection))
                }
              />
            </Fragment>
          ))}
        </div>
      </div>
      <MapView locations={locations} connections={connections} />
    </>
  );
}

export default App;
