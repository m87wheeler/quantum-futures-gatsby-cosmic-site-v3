import styled from "styled-components";
import Typography from "../../single/Typography/Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: ${(p) => `rgb(${p.theme.common.white})`};
  gap: 1.5rem;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    gap: 0.5rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    justify-items: flex-start;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const CallToAction = styled(Typography)`
  line-height: 1.2 !important;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    max-width: 25vw;
    margin-top: -0.5rem;
  }
`;
