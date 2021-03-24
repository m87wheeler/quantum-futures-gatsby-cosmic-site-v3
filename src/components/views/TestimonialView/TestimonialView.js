import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";
// import PropTypes from 'prop-types'
import TestimonialCard from "../../composite/TestimonialCard/TestimonialCard";
import Button from "../../single/Button/Button";

// *** styled components
const classes = {
  card: "card",
};
const appearDuration = 500;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  padding: 1rem;
  display: grid;
  grid-template: 1fr auto / 1fr 1fr;
  gap: 1rem;
  background: ${(p) => `rgba(${p.theme.common.black})`};
`;

const CardContainer = styled.div`
  position: relative;
  grid-column: 1 / span 2;
`;

const StyledTestimonialCard = styled(TestimonialCard)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  &.${classes.card}-appear {
    opacity: 0;
  }

  &.${classes.card}-enter {
    opacity: 0;
  }

  &.${classes.card}-enter-done {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-out;
  }
`;

const TestimonialView = ({ pageReady, ...props }) => {
  // *** query
  const data = useStaticQuery(graphql`
    query {
      allCosmicjsTestimonials {
        edges {
          node {
            id
            title
            slug
            content
            metadata {
              client_name
              client_company
              client_position
            }
          }
        }
      }
    }
  `);

  // *** state
  const [entryIndex, setEntryIndex] = useState(0);
  const [currentEntry, setCurrentEntry] = useState(
    data.allCosmicjsTestimonials.edges[entryIndex].node
  );

  useEffect(() => {
    setCurrentEntry(data.allCosmicjsTestimonials.edges[entryIndex].node);
  }, [entryIndex, data.allCosmicjsTestimonials.edges]);

  const handleIncrement = (n) => {
    if (n > 0) {
      entryIndex + 1 === data.allCosmicjsTestimonials.edges.length
        ? setEntryIndex(0)
        : setEntryIndex((entryIndex) => entryIndex + 1);
    } else {
      entryIndex === 0
        ? setEntryIndex(data.allCosmicjsTestimonials.edges.length - 1)
        : setEntryIndex((entryIndex) => entryIndex - 1);
    }
  };

  return (
    <Wrapper {...props}>
      <CardContainer>
        <CSSTransition
          in={true}
          timeout={appearDuration}
          classNames={classes.card}
          appear
        >
          {() => (
            <StyledTestimonialCard
              id={currentEntry.id}
              title={currentEntry.title}
              content={currentEntry.content}
              name={currentEntry.metadata.client_name}
              company={currentEntry.metadata.client_company}
              position={currentEntry.metadata.client_position}
            />
          )}
        </CSSTransition>
      </CardContainer>
      <Button
        variant="outline"
        onClick={() => handleIncrement(-1)}
        icon="chevronLeft"
      >
        Previous
      </Button>
      <Button onClick={() => handleIncrement(1)} icon="chevronRight" iconRight>
        Next
      </Button>
    </Wrapper>
  );
};

// TestimonialCards.defaultProps = {}

// TestimonialCards.propTypes = {}

export default TestimonialView;
