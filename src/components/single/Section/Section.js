import * as React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** styled components
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 1rem;
  background: ${(p) =>
    p.background ? `rgb(${p.theme.common[p.background]})` : "transparent"};

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 12;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 2 / span 10;
  }
`;

const Section = ({ background, children, ...props }) => {
  return (
    <Wrapper background={background} {...props}>
      {children}
    </Wrapper>
  );
};

// Section.defaultProps = {}

// Section.propTypes = {}

export default Section;
