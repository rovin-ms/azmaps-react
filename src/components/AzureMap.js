import React, { useEffect, useContext } from "react";
import { Map } from "azure-maps-control";
import "./AzureMap.css";
import { MapConfigContext } from "../MapConfigContext";

const AzureMap = () => {
  const mapconfigContext = useContext(MapConfigContext);

  console.log(mapconfigContext);

  useEffect(() => {
    var map = new Map("map-root", {
      center: [-0.113042, 51.511859],
      zoom: 8,
      view: "Auto",

      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: "ILo2lg8sBEvMbSIagMNW764i2E7smOvNr2DRMGtSsRQ"
      }
    });
  });

  return <div id="map-root" className="map"></div>;
};

export default AzureMap;
