import * as React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

// *** data, hooks & context

// *** components
import Typography from "../../single/Typography/Typography";
import QFLogo from "../../../assets/svg/QFLogo";

// *** styled components
export const LogoText = styled(Typography)`
  line-height: 1;
  font-weight: 500;
  margin-top: -0.25rem;
  font-size: 1.25rem !important;

  span {
    display: block;
  }
`;

export const StyledMainLogo = styled(QFLogo)`
  height: 2.5rem;
  width: auto;
  margin: -0.5rem -0.5rem 0 0;
`;

export const LogoLink = styled(Link)`
  margin-top: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;

  ${(p) =>
    p.index &&
    css`
      ${LogoText} {
        font-size: 2rem !important;
      }

      ${StyledMainLogo} {
        height: 3.75rem;
      }
    `}/* @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 3;
  }
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 2 / 4;
    padding: 0;
  } */
`;

const HeaderLogo = ({ index, ...props }) => {
  return (
    <LogoLink
      to="/"
      index={index}
      style={{ textDecoration: "none", zIndex: "999" }}
      {...props}
    >
      <StyledMainLogo />
      <LogoText element="h1" color="white" variant="h3">
        <span>QUANTUM</span>
        <span>FUTURES</span>
      </LogoText>
    </LogoLink>
  );
};

export default HeaderLogo;
