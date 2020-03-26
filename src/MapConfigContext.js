import { createContext } from "react";
import data from "./mapConfig.json";

const configData = data.MapConfig;
export const MapConfigContext = createContext(configData);
