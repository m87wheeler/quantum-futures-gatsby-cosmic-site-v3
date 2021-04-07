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
  background: ${(p) =>
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
`;

export const Subtitle = styled(Typography)`
  padding: 0 10%;
  font-weight: 700;
`;
