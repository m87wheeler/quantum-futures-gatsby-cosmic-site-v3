import styled from "styled-components";
import InnerHTML from "../../components/single/InnerHTML/InnerHTML";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    grid-column: 1 / 13;
    min-height: 50vh;
  }
`;

export const LandingWrapper = styled(Wrapper)`
  padding: 3rem 1rem;
`;

export const Introduction = styled(InnerHTML)`
  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    padding-left: calc(100vw / 12);
    padding-right: calc(100vw / 12);
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    padding-top: 2rem;
    padding-left: calc((100vw / 12) * 2);
    padding-right: calc((100vw / 12) * 2);
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding-left: calc((100vw / 12) * 3);
    padding-right: calc((100vw / 12) * 3);
  }
`;
