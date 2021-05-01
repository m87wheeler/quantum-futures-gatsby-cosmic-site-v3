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
  position: sticky;
  top: 4.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  z-index: 99;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    padding-right: calc(100vw / 12) !important;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    padding-right: 0;
    grid-column: 1 / 13;
    grid-row: 2 / 3;
  }

  /*
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding: 1rem calc(100vw / 12);
  } */

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
  margin-top: 1.5rem;
  padding: 0 1rem;
  font-size: 3rem !important;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    margin-top: 2rem;
    padding-left: calc(100vw / 12);
    padding-right: calc(100vw / 12);
    font-size: 3rem !important;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding-left: calc((100vw / 12) * 2);
    padding-right: calc((100vw / 12) * 2);
  }
`;
