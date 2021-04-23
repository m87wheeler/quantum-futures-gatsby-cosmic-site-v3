import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

// *** data, hooks & context

// *** components
import HeaderLogo from "../../composite/HeaderLogo/HeaderLogo";

// *** styled components
import {
  StyledHamburger,
  StyledNavMenu,
  Backdrop,
  Wrapper,
} from "./Header.style";

const Header = ({ backdropActive, index, ...props }) => {
  const [navOpen, setNavOpen] = useState(false);

  // ? toggle nav status
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <Wrapper backdrop={backdropActive} {...props}>
      {index ? null : <HeaderLogo />}
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
