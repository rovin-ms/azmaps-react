import React, { useEffect, useContext, useRef } from "react";
import * as atlas from "azure-maps-control";
import "./AzureMap.css";
import { MapConfigContext } from "../MapConfigContext";

const AzureMap = () => {
  //const [state, setState] = useContext(MapConfigContext);
  const [config, setConfig] = useContext(MapConfigContext);

  var mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new atlas.Map("map-root", {
      center: [config.centerLon, config.centerLat],
      zoom: config.zoomLevel,
      style: config.style,

      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: config.subscriptionKey
      }
    });
  });

  useEffect(() => {
    if (mapRef) {
      //Wait until the map resources are ready.
      mapRef.current.events.add("ready", function() {
        //Add a style control to the map.
        mapRef.current.controls.add(
          new atlas.control.StyleControl({
            mapStyles: "all"
          }),
          {
            position: "top-right"
          }
        );
      });
    }
  });

  return <div id="map-root" ref={mapRef} className="map"></div>;
};

export default AzureMap;
