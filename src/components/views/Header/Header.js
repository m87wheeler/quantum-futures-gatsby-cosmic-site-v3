import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
// import Typography from "../../single/Typography/Typography";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
import {
  StyledMainLogo,
  StyledHamburger,
  StyledNavMenu,
  Wrapper,
} from "./Header.style";

const Header = ({ ...props }) => {
  const [navOpen, setNavOpen] = useState(false);

  // ? toggle nav status
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <Wrapper {...props}>
      {/* <Link to="/" style={{ textDecoration: "none" }}> */}
      <StyledMainLogo />
      {/* </Link> */}
      <StyledHamburger active={navOpen} onClick={toggleNav} />
      <StyledNavMenu active={navOpen} />
    </Wrapper>
  );
};

// Header.defaultProps = {}

// Header.propTypes = {}

export default Header;
