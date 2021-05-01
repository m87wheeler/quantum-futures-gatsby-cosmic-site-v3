import styled from "styled-components";
import Section from "../../components/single/Section/Section";
import Typography from "../../components/single/Typography/Typography";
import IndexNewsfeed from "../../components/views/IndexNewsfeed/IndexNewsfeed";
import QFLogo from "../../assets/svg/QFLogo";

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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(p) => `rgba(${p.theme.primary.main}, .4)`};
  z-index: 10;
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
`;

export const LandingSection = styled(Section)`
  height: calc(100vh - 4.5rem);
  background: transparent;
`;

export const Title = styled(Typography)`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 3rem;
  justify-items: flex-start;
  font-size: 3rem !important;
  line-height: 1 !important;

  @media (min-width: ${(p) => p.theme.media.xs.min}) {
    font-size: 3.5rem !important;
  }

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    font-size: 5rem !important;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    max-width: 52rem;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    width: 90%;
    font-size: 6rem !important;
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

export const StyledHeaderLogo = styled(QFLogo)`
  min-width: 18rem;
  width: 60vw;
  height: auto;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    min-width: 24rem;
    width: 30vw !important;
  }
`;

export const StyledNewsfeed = styled(IndexNewsfeed)`
  min-height: calc(100vh - 4.5rem);

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
    min-height: 0;
    padding: 1rem calc(100vw / 12) 3rem;
  }
`;
