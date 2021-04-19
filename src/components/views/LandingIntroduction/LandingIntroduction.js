import * as React from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { useScroll } from "../../../hooks/useScroll";

// *** data, hooks & context

// *** components
import Typography from "../../single/Typography/Typography";

// *** styled components
const appearDuration = 500;
const classes = {
  hero: "hero",
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 24rem;
  padding: 0 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background: ${(p) => `rgb(${p.theme.common.black})`};
  z-index: 10;

  p {
    /* font-size: 2rem; */
    color: ${(p) => `rgb(${p.theme.common.white})`};
  }
`;

const SectionText = styled(Typography)`
  opacity: 0;
  margin-top: 3rem;

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

const LandingIntroduction = ({ text, ...props }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (scrollY > window.innerHeight / 3) setFadeIn(true);
    }
  }, [scrollY]);

  return (
    <Wrapper {...props}>
      <CSSTransition
        in={fadeIn}
        timeout={appearDuration}
        classNames={classes.hero}
        appear
      >
        <SectionText
          element="p"
          variant="h4"
          weight="600"
          family="header"
          transform="uppercase"
        >
          {text}
        </SectionText>
      </CSSTransition>
    </Wrapper>
  );
};

export default LandingIntroduction;
