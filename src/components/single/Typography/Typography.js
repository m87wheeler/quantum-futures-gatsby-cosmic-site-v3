import * as React from "react";
import PropTypes from "prop-types";

// *** styled components
import { Text, Span, H1, H2, H3, H4, H5, H6 } from "./Typography.style";

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
    "danger",
    "confirm",
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
