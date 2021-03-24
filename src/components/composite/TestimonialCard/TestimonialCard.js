import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import InnerHTML from "../../single/InnerHTML/InnerHTML";
import Typography from "../../single/Typography/Typography";

// *** styled components
const classes = { card: "card" };
const transitionDuration = 500;

const Wrapper = styled.div`
  width: calc(100% - 4rem);
  height: 70vh;
  padding: 2rem 1rem;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  align-items: center;
  background: ${(p) => `rgb(${p.theme.common.white})`};
  box-shadow: ${(p) => p.theme.shadow.main};
  color: ${(p) => `rgb(${p.theme.common.black})`};

  // *** transition group ***
  &.${classes.card}-enter {
    opacity: 0;
    z-index: 1;
  }
  &.${classes.card}-enter.${classes.card}-enter-active {
    opacity: 1;
    transition: opacity ${transitionDuration}ms linear;
  }
  &.${classes.card}-exit {
    opacity: 1;
  }
  &.${classes.card}-exit.${classes.card}-exit-active {
    opacity: 0;
    transition: opacity ${transitionDuration}ms linear;
  }
  &.${classes.card}-exit-done {
    opacity: 0;
  }
`;

const TestimonialCard = ({
  id,
  title,
  content,
  name,
  position,
  company,
  ...props
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={id}
        timeout={transitionDuration}
        classNames={classes.card}
      >
        <Wrapper {...props}>
          <Typography element="p" color="black" weight="800" variant="p">
            Client
          </Typography>
          <Typography element="h3" variant="h4" gradient color="secondary">
            {title}
          </Typography>
          <InnerHTML html={content} />
          <div>
            <Typography color="secondary" weight="800" variant="h5">
              {name}
            </Typography>
            <Typography color={800} size="xs">
              {position}
            </Typography>
            <Typography color={800} size="xs">
              {company}
            </Typography>
          </div>
        </Wrapper>
      </CSSTransition>
    </TransitionGroup>
  );
};

TestimonialCard.defaultProps = {
  content: `<p>No Content Provided</p>`,
};

TestimonialCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
};

export default TestimonialCard;
