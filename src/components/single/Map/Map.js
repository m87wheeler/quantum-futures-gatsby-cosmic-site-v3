import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div``;

const Map = ({ ...props }) => {
  const [map, setMap] = useState(null);
  const loc = {
    lng: -73.8242,
    lat: 45.429166,
    zoom: 17,
  };
  const container = useRef(null);

  //   useEffect(() => {
  //     if (typeof window !== undefined && container) {
  //       const newMap = new mapboxgl.Map({
  //         container: container.current,
  //         style: "mapbox://styles/mapbox/streets-v11",
  //         center: [loc.lng, loc.lat],
  //         zoom: loc.zoom,
  //       });
  //       setMap(newMap);
  //     }
  //   }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      console.log(process.env.MAPBOX_KEY);
    }
  }, []);

  return (
    <Wrapper ref={container} {...props}>
      {map}
    </Wrapper>
  );
};

export default Map;
