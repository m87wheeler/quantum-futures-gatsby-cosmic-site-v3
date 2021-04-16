import * as React from "react";
import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background: ${(p) => `rgb(${p.theme.common.black})`};
  z-index: 10;

  p {
    /* font-size: 2rem; */
    color: ${(p) => `rgb(${p.theme.common.white})`};
  }
`;

const LandingIntroduction = ({ text, ...props }) => {
  return (
    <Wrapper {...props}>
      <p>{text}</p>
    </Wrapper>
  );
};

export default LandingIntroduction;
