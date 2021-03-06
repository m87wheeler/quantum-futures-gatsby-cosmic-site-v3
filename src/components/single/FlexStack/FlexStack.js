import * as React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  column-gap: ${(p) => (p.gap ? `${p.gap * 0.25}rem` : 0)};
  gap: ${(p) => (p.gap ? `${p.gap * 0.25}rem` : 0)};
  padding: ${(p) => (p.padding ? `${p.padding * 0.25}rem` : 0)};
`;

const FlexStack = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

// FlexStack.defaultProps = {}

// FlexStack.propTypes = {}

export default FlexStack;
