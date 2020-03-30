import React, { createContext, useState } from "react";
import mapConfigData from "./mapConfig.json";

const configData = mapConfigData.MapConfig[0];
const MapConfigContext = createContext();

const MapConfigProvider = ({ children }) => {
  const [mapConfig, setMapConfig] = useState(configData);

  console.log(mapConfig);

  return (
    <MapConfigContext.Provider value={{ mapConfig, setMapConfig }}>
      {children}
    </MapConfigContext.Provider>
  );
};
export { MapConfigContext, MapConfigProvider };
