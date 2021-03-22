import * as React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: ${(p) => (p.gap ? `${p.gap * 0.25}rem` : 0)};
  padding: ${(p) => (p.padding ? `${p.padding * 0.25}rem` : 0)};
  background: ${(p) => `rgb(${p.theme.common[p.color]})`};
`;

const FlexStack = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

// FlexStack.defaultProps = {}

// FlexStack.propTypes = {}

export default FlexStack;
