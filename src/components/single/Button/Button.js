import * as React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// const colorOption = css`
//   ${(p) =>
//     p.color === "secondary"
//       ? `rgb(${p.theme.secondary.main})`
//       : p.color === "danger"
//       ? `rgb(${p.theme.common.danger})`
//       : p.color === "confirm"
//       ? `rgb(${p.theme.common.confirm})`
//       : p.color === "primary"
//       ? `rgb(${p.theme.primary.main})`
//       : p.color}
// `;

const colorOption = css`
  ${(p) =>
    p.color === "secondary"
      ? `rgb(${p.theme.secondary.main})`
      : p.color === "danger"
      ? `rgb(${p.theme.common.danger})`
      : p.color === "confirm"
      ? `rgb(${p.theme.common.confirm})`
      : p.color === "primary"
      ? `rgb(${p.theme.primary.main})`
      : p.color}/* ${(p) =>
    p.gradient &&
    css`
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      ${(p) =>
        p.color === "secondary"
          ? p.theme.secondary.gradient
          : p.theme.primary.gradient}
    `} */
`;

const Element = styled.button`
  display: grid;
  grid-template-columns: ${(p) => (p.icon ? "auto auto" : "auto")};
  column-gap: ${(p) => (p.icon ? ".5rem" : "0")};
  gap: ${(p) => (p.icon ? ".5rem" : "0")};
  align-items: center;
  justify-items: center;
  padding: 0.5rem 1rem;
  background: ${colorOption};
  color: ${(p) => `rgb(${p.theme.common.white})`};
  border: 0.1rem solid ${colorOption};
  border-radius: 0;
  box-shadow: ${(p) => (p.flat ? null : p.theme.shadow.main)};
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  text-transform: capitalize;
  line-height: 1;
  white-space: nowrap;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${colorOption};
  }

  ${(p) =>
    p.variant === "outline" &&
    css`
      background: transparent;
      color: ${colorOption};

      &:hover {
        background: ${colorOption};
        color: white;
      }
    `}
  ${(p) =>
    p.variant === "text" &&
    css`
      border: 0.1rem solid transparent;
      background: transparent;
      color: ${colorOption};

      &:hover {
        background: ${(p) =>
          p.color === "secondary"
            ? `rgba(${p.theme.secondary.main}, .1)`
            : p.color === "danger"
            ? `rgba(${p.theme.common.danger}, .1)`
            : p.color === "confirm"
            ? `rgba(${p.theme.common.confirm}, .1)`
            : p.color === "primary"
            ? `rgba(${p.theme.primary.main}, .1)`
            : p.color};
      }
    `}
  ${(p) =>
    p.size === "sm" &&
    css`
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    `}

  ${(p) =>
    p.size === "lg" &&
    css`
      font-size: 1.25rem;
    `}
`;

const Button = ({
  color,
  variant,
  size,
  icon,
  iconRight,
  value,
  flat,
  gradient,
  children,
  ...props
}) => {
  const chooseIcon = () => {
    switch (icon) {
      case "chevronLeft":
        return faChevronLeft;
      case "chevronRight":
        return faChevronRight;
      default:
        return;
    }
  };

  return (
    <Element
      color={color}
      variant={variant}
      size={size}
      icon={icon}
      iconRight={iconRight}
      value={value}
      flat={flat}
      gradient={gradient}
      {...props}
    >
      {!iconRight && icon && <FontAwesomeIcon icon={chooseIcon()} />}
      {children}
      {iconRight && icon && <FontAwesomeIcon icon={chooseIcon()} />}
    </Element>
  );
};

Button.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "md",
  iconRight: false,
  flat: false,
  // gradient: true,
};

Button.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["primary", "secondary", "danger", "confirm"]),
  ]),
  variant: PropTypes.oneOf(["contained", "outline", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.oneOf(["chevronLeft", "chevronRight"]),
  iconRight: PropTypes.bool,
  flat: PropTypes.bool,
  gradient: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
