import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 0.5rem;
  width: 100%;
  max-width: 6rem;

  svg {
    width: inherit;
    height: inherit;
  }

  p {
    font-size: 0.65rem;
    text-align: center;

    span {
      display: block;
      font-size: 0.5rem;
    }
  }
`;

const MWWDDLogo = ({ ...props }) => {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 105.833 36.739"
        height={138.855}
        width={400}
        {...props}
      >
        <g paintOrder="markers stroke fill">
          <path
            opacity={0.997}
            fill="#ce3535"
            d="M58.872 36.705l-8.422-8.422L68.745 9.988l8.422 8.422z"
          />
          <path
            opacity={0.997}
            fill="#ffa521"
            d="M46.961.033l8.422 8.422-18.295 18.296-8.422-8.422z"
          />
          <path
            opacity={0.997}
            fill="#0169aa"
            d="M3.455 8.456L11.877.034 30.172 18.33 21.75 26.75z"
          />
          <path
            opacity={0.997}
            fill="#ce3535"
            d="M29.42 17.577l8.421 8.422-8.422 8.421L20.997 26z"
          />
          <path
            opacity={0.997}
            fill="#242021"
            d="M0 .068h11.91v36.67H0zM46.962.034h11.91v36.67h-11.91z"
          />
          <path
            opacity={0.997}
            fill="#0169aa"
            d="M102.378 28.283l-8.421 8.421L75.66 18.41l8.422-8.422z"
          />
          <path
            opacity={0.997}
            fill="#ffa521"
            d="M76.414 19.162l-8.422-8.422 8.422-8.422 8.422 8.422z"
          />
          <path
            opacity={0.997}
            fill="#242021"
            d="M105.833 36.672h-11.91V0h11.91z"
          />
        </g>
      </svg>
      <p>
        MARTIN WHEELER <span>WEB DEVELOPMENT & DESIGN</span>
      </p>
    </Wrapper>
  );
};

export default MWWDDLogo;
