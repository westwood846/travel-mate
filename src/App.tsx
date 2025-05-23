import "./App.css";
import { MapView } from "./map";
import { LocationInput } from "./LocationInput";
import {
  makeInputLocation,
  validateLocation,
  type InputLocation,
  type Location,
} from "./locations";
import { Fragment, useState } from "react";
import { updateListById } from "./util";
import { ConnectionInput } from "./ConnectionInput";
import {
  makeInputConnection,
  validateConnection,
  type Connection,
  type InputConnection,
} from "./connections";

const sampleLocations = [
  { id: "1", lat: "51.505", lng: "-0.09", label: "London" },
  { id: "2", lat: "48.8566", lng: "2.3522", label: "Paris" },
  { id: "3", lat: "52.52", lng: "13.405", label: "Berlin" },
] as InputLocation[];

const sampleConnections = [
  {
    id: "1",
    a: "1",
    b: "2",
    distance: "500",
    price: "100",
    duration_h: "2",
    mode: "TRAIN",
  },
  {
    id: "2",
    a: "1",
    b: "3",
    distance: "1000",
    price: "200",
    duration_h: "5",
    mode: "PLANE",
  },
  {
    id: "3",
    a: "2",
    b: "3",
    distance: "300",
    price: "20",
    duration_h: "1",
    mode: "TRAIN",
  },
] as InputConnection[];

function App() {
  const [locations, setLocations] = useState(sampleLocations);
  const [connections, setConnections] = useState(sampleConnections);

  const validLocations = locations
    .map(validateLocation)
    .filter((x) => x) as Location[];
  const validConnections = connections
    .map((c) => validateConnection(c, validLocations))
    .filter((x) => x) as Connection[];

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
          <button
            onClick={() => setLocations([...locations, makeInputLocation()])}
          >
            Add location
          </button>
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
                locations={validLocations}
              />
            </Fragment>
          ))}
          <button
            onClick={() =>
              setConnections([...connections, makeInputConnection()])
            }
          >
            Add connection
          </button>
        </div>
      </div>
      <MapView locations={validLocations} connections={validConnections} />
    </>
  );
}

export default App;
