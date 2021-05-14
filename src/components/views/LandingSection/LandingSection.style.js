import styled from "styled-components";
import QFLogo from "../../../assets/svg/QFLogo";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }
`;

export const StyledQFLogo = styled(QFLogo)`
  width: calc(100% / 12 * 10);
  max-width: 25rem;
  height: auto;
  margin-bottom: 1rem;
`;

export const TitleOne = styled.h1`
  position: absolute;
  top: 50%;
  left: calc(100vw / 12);
  transform: translateY(calc(-50% - 4.5rem));
  font-size: 9vw;
  color: #fff;
  z-index: 3;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    font-size: 5.5rem;
  }

  span {
    position: relative;
    top: 3rem;
    display: block;
    opacity: 0;
    white-space: nowrap;

    &:first-of-type {
      animation: fade-up 1.5s ease forwards;
    }
    &:nth-of-type(2) {
      animation: fade-up 1.5s ease forwards 1s;
    }
    &:last-of-type {
      animation: fade-up 1.5s ease forwards 2s;
    }
  }

  @keyframes fade-up {
    from {
      top: 3rem;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
