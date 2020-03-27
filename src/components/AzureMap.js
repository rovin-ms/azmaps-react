import React, { useEffect, useContext, useRef } from "react";
import { Map } from "azure-maps-control";
import "./AzureMap.css";
import { MapConfigContext } from "../MapConfigContext";

const AzureMap = () => {
  const mapConfigContext = useContext(MapConfigContext);

  var mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new Map("map-root", {
      center: [-0.113042, 51.511859],
      zoom: 8,
      view: "Auto",
      style: mapConfigContext.style,

      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: mapConfigContext.subscriptionKey
      }
    });
  });

  return <div id="map-root" ref={mapRef} className="map"></div>;
};

export default AzureMap;
