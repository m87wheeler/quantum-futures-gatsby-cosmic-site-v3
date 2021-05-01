import * as React from "react";

// *** data, hooks & context

// *** components

// *** styled components
import { StyledMainLogo, LogoLink } from "./HeaderLogo.style";

const HeaderLogo = ({ ...props }) => {
  return (
    <LogoLink
      to="/"
      style={{ textDecoration: "none", zIndex: "999" }}
      {...props}
    >
      <StyledMainLogo />
      <h1 style={{ position: "absolute", top: "-100vh", left: "-100vw" }}>
        Quantum Futures
      </h1>
    </LogoLink>
  );
};

export default HeaderLogo;
