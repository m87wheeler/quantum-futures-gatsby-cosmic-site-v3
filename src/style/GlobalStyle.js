import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: ${(p) => p.theme.font.family.sans};
    background: ${(p) => `rgb(${p.theme.common.white})`};
    color: ${(p) => `rgb(${p.theme.common.black})`};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.font.family.header};
  }

  a {
    font-family: inherit;
    color: ${(p) => `rgb(${p.theme.primary.main})`};
    font-weight: 700;

    &:target {
      outline:  ${(p) => `.1rem solid rgb(${p.theme.primary.main})`}; 
    }
  }
`;
