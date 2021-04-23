import * as React from "react";
import styled from "styled-components";

// *** data, hooks & context

// *** components
import Typography from "../../single/Typography/Typography";

// *** styled components
const Wrapper = styled.div`
  display: none;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    width: 100%;
    height: calc(100vh - 6.5rem);
    display: grid;
    grid-template-rows: auto repeat(3, 1fr);
    gap: 1rem;
  }
`;

const StyledTypography = styled(Typography)`
  border-bottom: ${(p) => `2px solid rgb(${p.theme.common.black})`};
`;

const RelatedContent = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledTypography element="p" variant="h5" transform="uppercase">
        Related Stories
      </StyledTypography>
    </Wrapper>
  );
};

export default RelatedContent;
