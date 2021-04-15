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
  background: ${(p) => `rgb(${p.theme.common.black})`};
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

    @media (min-aspect-ratio: 16/9) {
      width: 100%;
      height: auto;
    }

    @media (max-aspect-ratio: 16/9) {
      width: auto;
      height: 100%;
    }
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    video,
    img {
      /* height: 100%;
      min-height: 100%;
      min-width: 100vw; */
    }
  }
`;

export const LandingSection = styled(Section)`
  height: calc(100vh - 4.5rem);
  background: transparent;
`;

export const Title = styled(Typography)`
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    width: 75%;
    margin-left: 12.5%;
    font-size: 4.5rem !important;
  }

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
  min-height: calc(100vh - 4.5rem);

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
    padding: 1rem calc(100vw / 12);
  }
`;
