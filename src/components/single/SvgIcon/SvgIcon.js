import * as React from "react";
import styled from "styled-components";

const SVG = styled.svg``;

const SvgIcon = ({
  width = 512,
  height = 512,
  viewBox = "0 0 24 24",
  children,
  ...props
}) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...props}
    >
      {children}
    </SVG>
  );
};

export default SvgIcon;
