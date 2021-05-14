import styled from "styled-components";
import IndexNewsfeed from "../../components/views/IndexNewsfeed/IndexNewsfeed";
import WorkWith from "../../components/views/WorkWith/WorkWith";

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
`;

export const StyledWorkWith = styled(WorkWith)`
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
    min-height: 0;
    padding-left: calc(100vw / 12);
    padding-right: calc(100vw / 12);
  }
`;

export const StyledNewsfeed = styled(IndexNewsfeed)`
  position: relative;
  top: -1px;
  min-height: calc(100vh - 4.5rem);

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
    min-height: 0;
    padding: 1rem calc(100vw / 12) 3rem;
  }
`;
