import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// *** data, hooks & context
import { useScroll } from "../../../hooks/useScroll";

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
  const [backdrop, setBackdrop] = useState(backdropActive);
  const [navOpen, setNavOpen] = useState(false);
  const { scrollDirection, scrollY } = useScroll();

  // ? toggle nav status
  const toggleNav = () => setNavOpen(!navOpen);

  // useEffect(() => console.log(scrollDirection, scrollY), [
  //   scrollDirection,
  //   scrollY,
  // ]);

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     scrollY === 0 ? setBackdrop(false) : setBackdrop(true);
  //   }
  // }, []);

  // useEffect(() => console.log(backdrop), [backdrop]);

  return (
    <Wrapper backdrop={backdrop} {...props}>
      <LogoLink to="/" style={{ textDecoration: "none", zIndex: "999" }}>
        <StyledMainLogo />
      </LogoLink>
      <StyledHamburger active={navOpen} onClick={toggleNav} />
      <StyledNavMenu active={navOpen} />
      <Backdrop backdrop={backdrop} />
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
