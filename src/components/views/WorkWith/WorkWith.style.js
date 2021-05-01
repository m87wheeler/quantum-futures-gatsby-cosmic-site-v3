import styled from "styled-components";

export const appearDuration = 500;
export const classes = {
  hero: "hero",
};

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 3rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background: ${(p) => `rgb(${p.theme.common.white})`};
  z-index: 10;
`;

export const Logo = styled.img`
  opacity: 0;

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

export const CompanyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;

  ${Logo} {
    align-self: center;
    max-width: 15rem;
    width: auto;
    height: auto;
  }
`;
