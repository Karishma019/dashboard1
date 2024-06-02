// src/HeatLayer.jsx
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "leaflet.heat"; // Import Leaflet Heat plugin

const HeatLayer = ({ points, ...options }) => {
  const mapRef = useRef(null);
  const heatLayerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && points.length > 0) {
      heatLayerRef.current = L.heatLayer(points, options).addTo(
        mapRef.current.leafletElement
      );
    }

    return () => {
      if (heatLayerRef.current) {
        heatLayerRef.current.remove();
      }
    };
  }, [points, options]);

  return null;
};

export default HeatLayer;
