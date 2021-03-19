import * as React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: {
    main: "225, 81, 198",
    contrast: "255, 255, 255",
    dark: "162, 40, 97",
  },
  secondary: {
    main: "59, 125, 134",
    contrast: "255, 255, 255",
    dark: "30, 62, 67",
  },
  common: {
    black: "17, 17, 17",
    white: "255, 255, 255",
    danger: "220, 20, 60",
    confirm: "46, 139, 87",
    grey: {
      50: "250, 250, 250",
      100: "244, 244, 245",
      200: "228, 228, 231",
      300: "212, 212, 216",
      400: "161, 161, 170",
      500: "113, 113, 122",
      600: "82, 82, 91",
      700: "63, 63, 70",
      800: "39, 39, 42",
      900: "24, 24, 27",
    },
  },
  shadow: {
    main: `0 1px 3px rgba(0, 0, 0, 0.52), 0 1px 2px rgba(0, 0, 0, 0.54)`,
  },
  font: {
    size: {
      xxs: ".5rem",
      xs: ".75rem",
      sm: ".9rem",
      md: "1rem",
      lg: "1.1rem",
      xl: "1.25rem",
      xxl: "1.5rem",
      header: {
        h1: "3rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.75rem",
        h5: "1.5rem",
        h6: "1rem",
      },
    },
    family: {
      sans: `'Lato', sans-serif`,
      header: `'Josefin Sans', sans-serif`,
      serif: "serif",
    },
  },
  media: {
    xs: {
      min: "400px",
    },
    sm: {
      min: "680px",
    },
    md: {
      min: "800px",
    },
    lg: {
      min: "960px",
    },
    xl: {
      min: "1280px",
    },
  },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
