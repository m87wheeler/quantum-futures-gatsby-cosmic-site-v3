import * as React from "react";

// *** data, hooks & context
// *** components
// *** styled components
import { Wrapper, StyledQFLogo, TitleOne } from "./LandingSection.style";

const LandingSection = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <TitleOne>
        <StyledQFLogo />
        <span>HELPING SHAPE</span>
        <span>THE FUTURE</span>
        <span>OF QUANTUM</span>
      </TitleOne>
    </Wrapper>
  );
};

export default LandingSection;
