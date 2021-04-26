import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "./mapstyle.css";
import "mapbox-gl/dist/mapbox-gl.css";

// *** data, hooks & context

// *** components
import { Helmet } from "react-helmet";

// *** styled components
const Wrapper = styled.div`
  height: 100%;
  min-height: 50vh;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    min-height: 15rem;
  }
`;

const Map = ({ lng, lat, zoom, markerTitle, markerDescription, ...props }) => {
  const [map, setMap] = useState(null);
  const loc = {
    lng: -0.092159,
    lat: 51.50325,
    zoom: 16.5,
  };
  const container = useRef(null);

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "point",
          coordinates: [loc.lng, loc.lat],
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
        center: [loc.lng, loc.lat],
        zoom: loc.zoom,
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
      setMap(newMap);
    }
  }, [container]);

  return (
    <>
      <Helmet>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Helmet>
      <Wrapper ref={container} {...props} />
    </>
  );
};

export default Map;
