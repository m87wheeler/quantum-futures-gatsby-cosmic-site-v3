import styled from "styled-components";
import { LandingWrapper } from "./About.style";

export const IntroWrapper = styled(LandingWrapper)`
  min-height: 0;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 8;
  }
`;
export const FormWrapper = styled(LandingWrapper)`
  padding-top: 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 8;
  }
`;
export const SocialWrapper = styled(LandingWrapper)`
  min-height: 0;
  padding-top: 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-row: 1 / 2;
    grid-column: 9 / span 4;
    padding-left: 0;
    padding-top: 7.5rem;
  }
`;
export const MapWrapper = styled(LandingWrapper)`
  min-height: 0;
  padding-top: 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    height: 100%;
    padding-left: 0;
    grid-row: 2 / 3;
    grid-column: 9 / span 4;
  }
`;
// TODO remove TempMap
export const TempMap = styled.div`
  width: 100%;
  height: 16rem;
  background: #aaa;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    height: 100%;
  }
`;
export const OfficesWrapper = styled(LandingWrapper)`
  padding-top: 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 12;
  }
`;
