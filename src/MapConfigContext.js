import { useState, createContext } from "react";
import React from "react";

import mapConfigData from "./mapConfig.json";

const configData = mapConfigData.MapConfig[0];

const MapConfigContext = createContext(configData);

const MapConfigProvider = props => {
  const [state, setState] = useState(configData);
  return (
    <MapConfigContext.Provider value={[state, setState]}>
      {props.children}
    </MapConfigContext.Provider>
  );
};

export { MapConfigContext, MapConfigProvider };
