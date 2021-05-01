import styled, { css } from "styled-components";
import { LandingWrapper } from "./About.style";

export const appearDuration = 500;
export const classes = {
  hero: "hero",
};

const fadeInAnimation = css`
  &.${classes.hero}-appear {
    opacity: 0;
    margin-top: 3rem;
  }

  &.${classes.hero}-enter {
    opacity: 0;
    margin-top: 3rem;
  }

  &.${classes.hero}-enter-done {
    opacity: 1;
    margin-top: 0rem;
    transition: opacity ${appearDuration}ms ease-out,
      margin-top ${appearDuration}ms ease-in-out;
    transition-delay: ${(p) => `${p.delay * 250 + 250}ms`};
  }
`;

export const IntroWrapper = styled(LandingWrapper)`
  min-height: 0;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 12;
  }
  ${fadeInAnimation};
`;

export const FormWrapper = styled(LandingWrapper)`
  padding-top: 3rem;
  padding-bottom: 3.5rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 8;
  }
  ${fadeInAnimation};
`;

export const SocialWrapper = styled(LandingWrapper)`
  min-height: 0;
  padding-top: 3rem;
  padding-bottom: 3.5rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-row: 2 / 3;
    grid-column: 9 / span 4;
    padding-left: 0;
  }
  ${fadeInAnimation};
`;

export const MapWrapper = styled(LandingWrapper)`
  min-height: 0;
  padding-top: 3rem;
  padding-bottom: 3.5rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    height: 100%;
    padding: 1rem 0;
    grid-row: 3 / 4;
    grid-column: 1 / span 12;
  }
  ${fadeInAnimation};
`;

// TODO remove TempMap
export const TempMap = styled.div`
  width: 100%;
  height: 16rem;
  background: #aaa;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    height: 100%;
  }
  ${fadeInAnimation};
`;

export const OfficesWrapper = styled(LandingWrapper)`
  padding-top: 3rem;
  padding-bottom: 3.5rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 12;
  }
  ${fadeInAnimation};
`;
