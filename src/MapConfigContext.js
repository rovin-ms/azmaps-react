import { createContext } from "react";
import data from "./mapConfig.json";

const configData = data.MapConfig[0];
export const MapConfigContext = createContext(configData);
