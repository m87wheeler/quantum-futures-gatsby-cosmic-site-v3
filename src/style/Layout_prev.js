// ! ***************
// ! ***************
// ! DO NOT DELETE *
// ! ************* *
// ! ***************

import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// *** data, hooks & context
import { GlobalStyle } from "./GlobalStyle";
import { Theme } from "./Theme";

// *** components
import Header from "../components/views/Header/Header";
import Main from "../components/views/Main/Main";
import Footer from "../components/views/Footer/Footer";

// *** styled components
const LayoutContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`;

const StyledMain = styled(Main)`
  padding-top: 4.5rem;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const StyledFooter = styled(Footer)`
  z-index: 999;
`;

const Layout = ({ background, children }) => {
  return (
    <Theme>
      <GlobalStyle />
      <StyledHeader />
      <LayoutContainer>
        <StyledMain background={background}>{children}</StyledMain>
        <StyledFooter />
      </LayoutContainer>
    </Theme>
  );
};

Layout.defaultProps = {
  background: "white",
};

Layout.propTypes = {
  background: PropTypes.oneOf(["white", "black"]),
};

export default Layout;
