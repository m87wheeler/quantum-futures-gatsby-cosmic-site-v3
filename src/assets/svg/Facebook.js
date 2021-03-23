import * as React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  path {
    fill: #fff;
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    path {
      fill: yellow;
    }
  }
`;

const Facebook = ({ width = 512, height = 512, ...props }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"
        // fill="#fff"
        data-original="#000000"
      />
    </SVG>
  );
};

export default Facebook;
