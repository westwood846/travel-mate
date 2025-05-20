import type { LatLngTuple } from "leaflet";
import "./App.css";
import { MapView } from "./map";
import { LocationInput, updateLocationInList, type Location } from "./location";
import { Fragment, useState } from "react";

const pins = [
  { id: "1", position: [51.505, -0.09] as LatLngTuple, label: "London" },
  { id: "2", position: [48.8566, 2.3522] as LatLngTuple, label: "Paris" },
  { id: "3", position: [52.52, 13.405] as LatLngTuple, label: "Berlin" },
] as Location[];

function App() {
  const [locations, setLocations] = useState(pins);

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
                  setLocations(updateLocationInList(locations, location))
                }
              />
            </Fragment>
          ))}
        </div>
        <div className="connections">foo</div>
      </div>
      <MapView pins={locations} />
    </>
  );
}

export default App;
