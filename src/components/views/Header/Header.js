import * as React from "react";
import { useState, useRef, useEffect } from "react";
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
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  // ? toggle nav status
  const toggleNav = () => setNavOpen(!navOpen);

  // ? useClickOutside hook
  useEffect(() => {
    const listener = (e) => {
      if (!navRef.current || !hamburgerRef.current || !navOpen) return;
      if (navRef.current && !navRef.current.contains(e.target))
        setNavOpen(false);
    };

    if (typeof window !== undefined) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [navOpen]);

  return (
    <Wrapper backdrop={backdropActive} {...props}>
      {index ? null : <HeaderLogo />}
      <StyledHamburger
        active={navOpen}
        onClick={toggleNav}
        ref={hamburgerRef}
      />
      <StyledNavMenu active={navOpen} ref={navRef} />
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
