import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styled from "styled-components";
import markerImg from "../../../assets/images/QFLogoMarker.png";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  min-width: 100%;
  height: 60vh;
`;

const StyledMarker = styled(Marker)`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 100%;
`;

const MarkerImage = styled.img`
  width: 60px;
  height: 60px;
`;

const ReactMap = ({
  title,
  description,
  latitude,
  longitude,
  zoom,
  ...props
}) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
    width: "100%",
    height: "100%",
  });

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "point",
          coordinates: [latitude, longitude],
        },
        properties: {
          title,
          description,
        },
      },
    ],
  };

  return (
    <Wrapper {...props}>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/m87-wheeler/cknyyhqyb1yvp17qxpjod1rfo"
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_KEY}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {geojson.features.map((office) => (
          <StyledMarker
            key={office.properties.title}
            latitude={office.geometry.coordinates[0]}
            longitude={office.geometry.coordinates[1]}
          >
            <MarkerImage src={markerImg} alt="Marker" />
          </StyledMarker>
        ))}
      </ReactMapGL>
    </Wrapper>
  );
};

export default ReactMap;
