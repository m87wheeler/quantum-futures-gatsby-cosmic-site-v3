import styled from "styled-components";
import Typography from "../../components/single/Typography/Typography";
import InnerHTML from "../../components/single/InnerHTML/InnerHTML";
import TestimonialView from "../../components/views/TestimonialView/TestimonialView";

export const appearDuration = 500;
export const classes = {
  welcome: "welcome",
  testimonials: "testimonials",
};

export const MainTitle = styled(Typography)`
  padding: 2rem 0 1rem;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    grid-column: 4 / span 6;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / span 12;
    grid-row: 1 / 2;
    align-self: center;
  }
`;

export const SubTitle = styled(MainTitle)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: none;
  }
`;

export const StyledInnerHtml = styled(InnerHTML)`
  margin: 1rem;

  &.${classes.welcome}-appear {
    opacity: 0;
  }

  &.${classes.welcome}-enter {
    opacity: 0;
  }

  &.${classes.welcome}-enter-done {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-out;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / span 4;
    text-align: justify;
  }
`;

// ***
export const StyledTestimonialView = styled(TestimonialView)`
  &.${classes.testimonials}-appear {
    opacity: 0;
    margin-top: 3rem;
  }

  &.${classes.testimonials}-enter {
    opacity: 0;
    margin-top: 3rem;
  }

  &.${classes.testimonials}-enter-done {
    opacity: 1;
    margin-top: 0rem;
    transition: opacity ${appearDuration}ms ease-out,
      margin-top ${appearDuration}ms ease-in-out;
    transition-delay: 500ms;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 7 / span 5;
    min-height: 70vh;
    margin-bottom: 1rem;
  }
`;
