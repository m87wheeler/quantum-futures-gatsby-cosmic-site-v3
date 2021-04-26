import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// *** mapboxgl
import mapboxgl from "mapbox-gl";
import "./mapstyle.css";
import "mapbox-gl/dist/mapbox-gl.css";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  height: 100%;
  min-height: 50vh;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    min-height: 15rem;
  }
`;

const Map = ({ lng, lat, zoom, markerTitle, markerDescription, ...props }) => {
  const container = useRef(null);

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "point",
          coordinates: [lng, lat],
        },
        properties: {
          title: "London Office",
          description: "100 Alpha House, SE1 1LB",
        },
      },
    ],
  };

  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY;
    if (typeof window !== undefined && container) {
      // *** create map instance
      const newMap = new mapboxgl.Map({
        container: container.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      });
      // *** create markers
      geojson.features.forEach((marker) => {
        const el = document.createElement("div");
        el.className = "marker";
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3>${markerTitle}</h3>
               <p>${markerDescription}</p>`
            )
          )
          .addTo(newMap);
      });
    }
  }, [container]);

  return <Wrapper ref={container} {...props} />;
};

export default Map;
