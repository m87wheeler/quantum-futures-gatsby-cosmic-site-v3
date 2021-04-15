import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

// *** data, hooks & context

// *** components

// *** styled components
import {
  StyledMainLogo,
  LogoLink,
  StyledHamburger,
  StyledNavMenu,
  Backdrop,
  Wrapper,
} from "./Header.style";

const Header = ({ backdropActive, ...props }) => {
  const [navOpen, setNavOpen] = useState(false);

  // ? toggle nav status
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <Wrapper backdrop={backdropActive} {...props}>
      <LogoLink to="/" style={{ textDecoration: "none", zIndex: "999" }}>
        <StyledMainLogo />
      </LogoLink>
      <StyledHamburger active={navOpen} onClick={toggleNav} />
      <StyledNavMenu active={navOpen} />
      <Backdrop />
    </Wrapper>
  );
};

Header.defaultProps = {
  backdropActive: true,
};

Header.propTypes = {
  backdropActive: PropTypes.bool,
};

export default Header;
