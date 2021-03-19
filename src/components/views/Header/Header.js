import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import Typography from "../../single/Typography/Typography";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
import { Logo, StyledHamburger, StyledNavMenu, Wrapper } from "./Header.style";

const Header = ({ ...props }) => {
  const [navOpen, setNavOpen] = useState(false);

  // ? toggle nav status
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <Wrapper {...props}>
      <Logo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography element="span" variant="h4" color="white">
            Quantum
          </Typography>
          <Typography element="span" variant="h4" color="white">
            Futures
          </Typography>
        </Link>
      </Logo>
      <StyledNavMenu active={navOpen} />
      <StyledHamburger active={navOpen} onClick={toggleNav} />
    </Wrapper>
  );
};

// Header.defaultProps = {}

// Header.propTypes = {}

export default Header;
