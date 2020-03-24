import React, { useEffect } from "react";
import { Map } from "azure-maps-control";
import "./AzureMap.css";

const AzureMap = () => {
  useEffect(() => {
    var map = new Map("map-root", {
      center: [-0.113042, 51.511859],
      zoom: 8,
      view: "Auto",

      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: ""
      }
    });
  });

  return <div id="map-root" className="map"></div>;
};

export default AzureMap;
