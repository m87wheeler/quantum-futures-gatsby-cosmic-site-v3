import styled, { css } from "styled-components";
import Typography from "../../components/single/Typography/Typography";
import NewsfeedList from "../../components/views/NewsfeedList/NewsfeedList";

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

export const DisplayToggleWrapper = styled.div`
  position: fixed;
  top: 4.5rem;
  right: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0.5rem;
  align-items: center;
  padding: 1.25rem 1rem 0 0 !important;
  background: transparent;
  z-index: 99;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    padding-top: 4.25rem !important;
    padding-right: calc(100vw / 12) !important;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / 12;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding: 1rem calc(100vw / 12);
  }

  ${fadeInAnimation};
`;

export const StyledNewsfeedList = styled(NewsfeedList)`
  padding-bottom: 1rem !important;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    padding-left: calc(100vw / 12) !important;
    padding-right: calc(100vw / 12) !important;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding: 1rem calc(100vw / 12 * 2) !important;
  }

  ${fadeInAnimation};
`;

export const Title = styled(Typography)`
  padding: 0 1rem 3rem;
  font-size: 2rem !important;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    margin-top: 2rem;
    padding: 0 calc(100vw / 12) 3rem;
    font-size: 3rem !important;
  }
`;
