import * as React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.main`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
`;

const Main = ({ ...props }) => {
  return <Wrapper {...props} />;
};

// Main.defaultProps = {}

// Main.propTypes = {}

export default Main;
