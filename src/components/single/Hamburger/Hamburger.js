import * as React from "react";
import { forwardRef } from "react";
// import PropTypes from "prop-types";

// ***
import { Element, Cross } from "./Hamburger.style";

const Hamburger = (
  { active = false, onClick, color = "primary", children, ...props },
  ref
) => {
  return (
    <Element
      active={active}
      onClick={onClick}
      aria-label="navigation-menu-button"
      ref={ref}
      {...props}
    >
      <span />
      <span />
      <span />
      <Cross active={active} color={color}>
        <div />
        <div />
      </Cross>
    </Element>
  );
};

const forwardedHamburger = forwardRef(Hamburger);

// forwardedHamburger.defaultProps = {
//   color: "primary",
//   active: false,
// };

// forwardedHamburger.propTypes = {
//   active: PropTypes.bool,
//   onClick: PropTypes.func.isRequired,
//   color: PropTypes.oneOf(["primary", "secondary"]),
// };

export default forwardedHamburger;
