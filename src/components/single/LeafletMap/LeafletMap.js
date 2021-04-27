import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";

// *** data, hooks & context

// *** components
import markerIcon from "../../../assets/images/QFLogoMarker.png";
import InnerHTML from "../InnerHTML/InnerHTML";
import Typography from "../Typography/Typography";

// *** styled components
const StyledMapContainer = styled(MapContainer)`
  .leaflet-control-attribution,
  .leaflet-top,
  .leaflet-bottom {
    z-index: 500 !important;
  }
`;

const StyledPopup = styled(Popup)`
  p {
    margin: 0;
  }
`;

const LeafletMap = ({
  latitude,
  longitude,
  zoom,
  title,
  description,
  ...props
}) => {
  const customMarker = new L.icon({
    iconUrl: markerIcon,
    iconSize: [64, 64],
  });

  if (typeof window !== undefined) {
    return (
      <StyledMapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "60vh" }}
        {...props}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={customMarker}>
          <StyledPopup>
            <Typography
              element="p"
              variant="h6"
              gradient
              color="primary"
              transform="uppercase"
              weight="600"
              family="header"
            >
              {title}
            </Typography>
            <InnerHTML html={description} collapse />
          </StyledPopup>
        </Marker>
      </StyledMapContainer>
    );
  }
  return null;
};

export default LeafletMap;
