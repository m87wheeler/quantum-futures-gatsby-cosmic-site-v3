import * as React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  g,
  path {
    fill: #fff;
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    path {
      fill: ${(p) => `rgb(${p.theme.primary.main})`};
    }
  }
`;

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
