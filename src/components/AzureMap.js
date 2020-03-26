import React, { useEffect, useContext } from "react";
import { Map } from "azure-maps-control";
import "./AzureMap.css";
import { MapConfigContext } from "../MapConfigContext";

const AzureMap = () => {
  const mapConfigContext = useContext(MapConfigContext);

  console.log(mapConfigContext);

  useEffect(() => {
    var map = new Map("map-root", {
      center: [-0.113042, 51.511859],
      zoom: 8,
      view: "Auto",
      style: mapConfigContext[0].style,

      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: mapConfigContext[0].subscriptionKey
      }
    });
  });

  return <div id="map-root" className="map"></div>;
};

export default AzureMap;
