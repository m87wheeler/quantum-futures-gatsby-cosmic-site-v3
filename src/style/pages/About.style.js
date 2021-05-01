import styled from "styled-components";
import InnerHTML from "../../components/single/InnerHTML/InnerHTML";
import Typography from "../../components/single/Typography/Typography";

export const appearDuration = 500;
export const classes = {
  hero: "hero",
};

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    grid-column: 1 / 13;
  }
`;

export const LandingWrapper = styled(Wrapper)`
  padding: 3rem 1rem 0;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    padding-left: calc(100vw / 12);
    padding-right: calc(100vw / 12);
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding-left: calc((100vw / 12) * 2);
    padding-right: calc((100vw / 12) * 2);
  }
`;

export const Title = styled(Typography)`
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

export const Content = styled(InnerHTML)`
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
