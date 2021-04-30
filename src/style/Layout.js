import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

// *** data, hooks & context
import { GlobalStyle } from "./GlobalStyle";
import { Theme } from "./Theme";

// *** components
import favicon from "../assets/images/QFLogoFavicon.png";
import Header from "../components/views/Header/Header";
import Main from "../components/views/Main/Main";
import Footer from "../components/views/Footer/Footer";

// *** styled components
const LayoutContainer = styled.div`
  position: relative;
  padding-top: 4.5rem;
  display: grid;
  grid-template-rows: minmax(calc(100vh - 4.5rem), 1fr) auto;
  grid-template-columns: 1fr;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const StyledFooter = styled(Footer)`
  z-index: 99;
`;

const Layout = ({ index, background, backdropActive, children }) => {
  return (
    <Theme>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyle />
      <StyledHeader backdropActive={backdropActive} index={index} />
      <LayoutContainer>
        <Main background={background}>{children}</Main>
        <StyledFooter />
      </LayoutContainer>
    </Theme>
  );
};

Layout.defaultProps = {
  background: "white",
  backdropActive: true,
  index: false,
};

Layout.propTypes = {
  background: PropTypes.oneOf(["white", "black"]),
  backdropActive: PropTypes.bool,
  index: PropTypes.oneOf(["true", undefined]),
};

export default Layout;
