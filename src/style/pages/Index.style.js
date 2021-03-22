import styled from "styled-components";
import Section from "../../components/single/Section/Section";
import Typography from "../../components/single/Typography/Typography";
import IndexNewsfeed from "../../components/views/IndexNewsfeed/IndexNewsfeed";

export const appearDuration = 500;
export const classes = {
  hero: "hero",
};

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    height: 75vh;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    height: 50vh;
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  video,
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    video,
    img {
      max-height: none;
      min-height: 100%;
      min-width: 100vw;
      max-width: 110vw;
    }
  }
`;

export const LandingSection = styled(Section)`
  height: calc(100vh - 4.5rem);
  background: transparent;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    height: calc(75vh - 4.5rem);
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    height: calc(50vh - 4.5rem);
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
    transition-delay: 250ms;
  }
`;

export const StyledNewsfeed = styled(IndexNewsfeed)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
    padding: 1rem calc(100vw / 12);
  }
`;
