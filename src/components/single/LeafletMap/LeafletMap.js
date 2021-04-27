import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import InnerHTML from "../InnerHTML/InnerHTML";
import Typography from "../Typography/Typography";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div``;

const LeafletMap = ({
  latitude,
  longitude,
  zoom,
  title,
  description,
  ...props
}) => {
  if (typeof window !== undefined) {
    return (
      <MapContainer
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
        <Marker position={[latitude, longitude]}>
          <Popup>
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
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  return null;
};

export default LeafletMap;
