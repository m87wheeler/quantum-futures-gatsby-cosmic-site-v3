import * as React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const colorOption = css`
  ${(p) =>
    p.color === "secondary"
      ? "rgb(233,22,255)"
      : p.color === "danger"
      ? "rgb(220,20,60)"
      : p.color === "confirm"
      ? "rgb(46,139,87)"
      : p.color === "primary"
      ? "rgb(0,163,163)"
      : p.color}
`;

const Element = styled.button`
  display: grid;
  grid-template-columns: ${(p) => (p.icon ? "auto auto" : "auto")};
  gap: ${(p) => (p.icon ? ".5rem" : "0")};
  align-items: center;
  justify-items: center;
  padding: 0.5rem 1rem;
  background: ${colorOption};
  color: white;
  border: 0.1rem solid ${colorOption};
  border-radius: 0;
  box-shadow: ${(p) => (p.shadow ? p.theme.shadow.main : null)};
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
            ? "rgba(255,105,180, .1)"
            : p.color === "danger"
            ? "rgba(220,20,60, .1)"
            : p.color === "confirm"
            ? "rgba(46,139,87, .1)"
            : p.color === "primary"
            ? "rgba(32,178,170, .1)"
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
  shadow,
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
      shadow={shadow}
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
  shadow: false,
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
  shadow: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
