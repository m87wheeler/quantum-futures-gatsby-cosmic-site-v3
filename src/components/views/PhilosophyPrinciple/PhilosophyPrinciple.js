import * as React from "react";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import InnerHTML from "../../single/InnerHTML/InnerHTML";
import Typography from "../../single/Typography/Typography";

// *** styled components
import {
  Wrapper,
  BackgroundImage,
  Subtitle,
} from "./PhilosophyPrinciple.style";

const PhilosophyPrinciple = ({
  title,
  background,
  subtitle,
  content,
  backgroundImage,
}) => {
  return (
    <Wrapper background={background}>
      <BackgroundImage backgroundImage={backgroundImage} />
      <Typography
        element="h3"
        variant="h2"
        color={background === "black" ? "white" : "black"}
        align="left"
        transform="uppercase"
      >
        {title}
      </Typography>
      <Subtitle element="p" color={background === "black" ? "white" : "black"}>
        {subtitle}
      </Subtitle>
      <InnerHTML
        html={content}
        color={background === "black" ? "white" : "black"}
        cols={3}
      />
    </Wrapper>
  );
};

export default PhilosophyPrinciple;
