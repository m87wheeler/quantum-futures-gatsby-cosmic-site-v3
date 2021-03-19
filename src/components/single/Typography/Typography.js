import * as React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// *** styled components
const sharedStyles = css`
  color: ${(p) =>
    typeof p.color === "number"
      ? `rgb(${p.theme.common.grey[p.color]})`
      : p.color === "primary" || p.color === "secondary"
      ? `rgb(${p.theme[p.color].main})`
      : p.color === "primary-contrast" || p.color === "secondary-contrast"
      ? `rgb(${p.theme[p.color].contrast})`
      : `rgb(${p.theme.common[p.color]})`};
  font-weight: ${(p) => p.weight};
  text-transform: ${(p) => p.transform};
  text-align: ${(p) => p.align};
  font-family: ${(p) => p.theme.font.family[p.family]};

  ${(p) =>
    p.gradient &&
    css`
      -webkit-text-fill-color: transparent;
      background: ${(p) =>
        p.color === "secondary"
          ? `-webkit-linear-gradient(
        30deg,
        rgb(${p.theme.secondary.main}),
        rgb(${p.theme.secondary.dark})
      )`
          : `-webkit-linear-gradient(
        30deg,
        rgb(${p.theme.primary.main}),
        rgb(${p.theme.primary.dark})
      )`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;
const textStyles = css`
  font-size: ${(p) =>
    p.variant
      ? p.theme.font.size.header[p.variant]
      : p.theme.font.size[p.size]};
  line-height: 1.5;
`;
const headerStyles = css`
  line-height: 1.25;
  font-size: ${(p) =>
    p.variant
      ? p.theme.font.size.header[p.variant]
      : p.theme.font.size.header[p.element]} !important;
`;

const Text = styled.p`
  ${sharedStyles};
  ${textStyles};
`;
const Span = styled.span`
  ${sharedStyles};
  ${textStyles};
`;
const H1 = styled.h1`
  ${sharedStyles};
  ${headerStyles};
`;
const H2 = styled.h2`
  ${sharedStyles};
  ${headerStyles};
`;
const H3 = styled.h3`
  ${sharedStyles};
  ${headerStyles};
`;
const H4 = styled.h4`
  ${sharedStyles};
  ${headerStyles};
`;
const H5 = styled.h5`
  ${sharedStyles};
  ${headerStyles};
`;
const H6 = styled.h6`
  ${sharedStyles};
  ${headerStyles};
`;

const Typography = ({
  element,
  children,
  variant,
  size,
  color,
  weight,
  transform,
  align,
  family,
  gradient,
  ...props
}) => {
  switch (element) {
    case "p":
      return (
        <Text
          {...props}
          color={color}
          weight={weight}
          size={size}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "sans"}
          gradient={gradient}
        >
          {children}
        </Text>
      );
    case "span":
      return (
        <Span
          {...props}
          color={color}
          weight={weight}
          size={size}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "sans"}
          gradient={gradient}
        >
          {children}
        </Span>
      );
    case "h1":
      return (
        <H1
          {...props}
          color={color}
          weight={weight}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "header"}
          gradient={gradient}
        >
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2
          {...props}
          color={color}
          weight={weight}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "header"}
          gradient={gradient}
        >
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3
          {...props}
          color={color}
          weight={weight}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "header"}
          gradient={gradient}
        >
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4
          {...props}
          color={color}
          weight={weight}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "header"}
          gradient={gradient}
        >
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5
          {...props}
          color={color}
          weight={weight}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "header"}
          gradient={gradient}
        >
          {children}
        </H5>
      );
    case "h6":
      return (
        <H6
          {...props}
          color={color}
          weight={weight}
          variant={variant}
          transform={transform}
          align={align}
          family={family || "header"}
          gradient={gradient}
        >
          {children}
        </H6>
      );
    default:
      return (
        <Text
          {...props}
          color={color}
          weight={weight}
          size={size}
          transform={transform}
          align={align}
          family={family || "sans"}
        >
          {children}
        </Text>
      );
  }
};

Typography.defaultProps = {
  element: "p",
  color: "black",
  align: "left",
  gradient: false,
  family: undefined,
};

Typography.propTypes = {
  element: PropTypes.oneOf(["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"]),
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]),
  color: PropTypes.oneOf([
    "black",
    "white",
    "primary",
    "secondary",
    "primary-contrast",
    "secondary-contrast",
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ]),
  weight: PropTypes.oneOf([
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    400,
    500,
    600,
    700,
    800,
    900,
  ]),
  transform: PropTypes.oneOf([
    "uppercase",
    "capitalize",
    "lowercase",
    "inherit",
  ]),
  gradient: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right", "justify", "inherit"]),
  family: PropTypes.oneOf(["sans", "header", "serif", "mono", undefined]),
};

export default Typography;
