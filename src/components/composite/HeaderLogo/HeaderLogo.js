import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// *** data, hooks & context

// *** components
import QFLogo from "../../../assets/svg/QFLogo";

// *** styled components
export const StyledMainLogo = styled(QFLogo)`
  height: ${(p) => (p.indexpage === "true" ? "5rem" : "3rem")};
  width: auto;
  margin: -1rem -0.5rem 0 0;
`;

export const LogoLink = styled(Link)`
  margin-top: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

const HeaderLogo = ({ index, ...props }) => {
  return (
    <LogoLink
      to="/"
      style={{ textDecoration: "none", zIndex: "999" }}
      {...props}
    >
      <StyledMainLogo indexpage={index ? index.toString() : undefined} />
      <h1 style={{ position: "absolute", top: "-100vh", left: "-100vw" }}>
        Quantum Futures
      </h1>
    </LogoLink>
  );
};

export default HeaderLogo;
