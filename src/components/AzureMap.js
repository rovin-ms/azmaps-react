import React, { useEffect, useContext, useRef } from "react";
import { Map } from "azure-maps-control";
import "./AzureMap.css";
import { MapConfigContext } from "../MapConfigContext";

const AzureMap = () => {
  const config = useContext(MapConfigContext);

  var mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new Map("map-root", {
      center: [config.centerLon, config.centerLat],
      zoom: 8,
      view: "Auto",
      style: config.style,

      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: config.subscriptionKey
      }
    });
  });

  return <div id="map-root" ref={mapRef} className="map"></div>;
};

export default AzureMap;
