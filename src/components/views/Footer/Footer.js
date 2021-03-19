import * as React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.footer`
  width: 100%;
  min-height: 40vh;
  padding: 1rem 0;
  background: ${(p) => `rgb(${p.theme.common.black})`};
  color: ${(p) => `rgb(${p.theme.common.white})`};

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
`;

const Footer = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <p style={{ gridColumn: "2 / 4" }}>&copy; 2021</p>
    </Wrapper>
  );
};

// Footer.defaultProps = {}

// Footer.propTypes = {}

export default Footer;
