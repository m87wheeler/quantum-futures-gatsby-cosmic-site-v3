import styled from "styled-components";
import Typography from "../../single/Typography/Typography";

export const classes = {
  card: "card",
};
export const appearDuration = 500;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 2rem;
  gap: 2rem;
  min-height: calc(100vh - 4.5rem);
  padding: 3rem 1rem;
  overflow: hidden;
  background-color: ${(p) =>
    p.background === "black"
      ? `rgb(${p.theme.common.grey[900]})`
      : `rgb(${p.theme.common.white})`};
  color: ${(p) =>
    p.background === "black"
      ? `rgb(${p.theme.common.white})`
      : `rgb(${p.theme.common.black})`};

  * {
    position: relative;
    z-index: 1;
  }

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    padding-left: calc(100vw / 12);
    padding-right: calc(100vw / 12);
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    padding-left: calc((100vw / 12));
    padding-right: calc((100vw / 12));
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding-left: calc((100vw / 12) * 2);
    padding-right: calc((100vw / 12) * 2);
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(p) => `url(${p.backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Icon = styled.img`
  position: absolute;
  top: 4rem;
  right: 1rem;
  width: 75vw;
  opacity: 0;
  z-index: 0;

  &.${classes.card}-appear {
    top: 4rem;
    opacity: 0;
  }

  &.${classes.card}-enter {
    top: 4rem;
    opacity: 0;
  }

  &.${classes.card}-enter-done {
    top: 2rem;
    opacity: 0.33;
    transition: top ${appearDuration}ms ease-out,
      opacity ${appearDuration}ms ease-out;
  }

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    top: calc(50% + 3rem);
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 20rem;

    &.${classes.card}-appear {
      top: calc(50% + 3rem);
    }

    &.${classes.card}-enter {
      top: calc(50% + 3rem);
    }

    &.${classes.card}-enter-done {
      top: 50%;
    }
  }
`;

export const Subtitle = styled(Typography)`
  font-weight: 700;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    align-self: flex-start;
    max-width: 75vw;
  }
`;
