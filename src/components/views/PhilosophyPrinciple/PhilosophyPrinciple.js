import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
// import PropTypes from 'prop-types'

// *** data, hooks & context
import { useScroll } from "../../../hooks/useScroll";

// *** components
import InnerHTML from "../../single/InnerHTML/InnerHTML";
import Typography from "../../single/Typography/Typography";

// *** styled components
import {
  classes,
  appearDuration,
  Wrapper,
  Icon,
  Subtitle,
} from "./PhilosophyPrinciple.style";

const PhilosophyPrinciple = ({
  title,
  icon,
  subtitle,
  content,
  background,
}) => {
  const [displayIcon, setDisplayIcon] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // ?
  useEffect(() => {
    if (typeof window !== undefined && containerRef.current) {
      let viewport = window.innerHeight / 2;
      let container = containerRef.current.getBoundingClientRect().top;

      if (container < viewport) setDisplayIcon(true);
    }
  }, [scrollY]);

  return (
    <Wrapper background={background} ref={containerRef}>
      <Typography
        element="h3"
        variant="h2"
        color={background === "black" ? "white" : "black"}
        align="center"
      >
        {title}
      </Typography>
      <Subtitle
        element="p"
        color={background === "black" ? "white" : "black"}
        align="center"
      >
        {subtitle}
      </Subtitle>
      <CSSTransition
        in={displayIcon}
        timeout={appearDuration}
        classNames={classes.card}
        appear
      >
        <Icon src={icon} alt={`${title} Icon`} />
      </CSSTransition>
      <InnerHTML
        html={content}
        color={background === "black" ? "white" : "black"}
      />
    </Wrapper>
  );
};

export default PhilosophyPrinciple;
