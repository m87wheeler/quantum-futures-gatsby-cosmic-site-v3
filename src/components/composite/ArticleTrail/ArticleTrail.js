import * as React from "react";
import Typography from "../../single/Typography/Typography";

// *** data, hooks & context

// *** components

// *** styled components
import { Wrapper, PreviousLink, NextLink } from "./ArticleTrail.style";

const ArticleTrail = ({ next, previous, ...props }) => {
  return (
    <Wrapper {...props}>
      {previous ? (
        <PreviousLink
          element="p"
          family="header"
          weight={600}
          transform="capitalize"
        >
          <a href={`/newsfeed/${previous.slug}`}>
            PREVIOUS
            <Typography element="span" family="sans">
              {next ? next.title : previous.title}
            </Typography>
          </a>
        </PreviousLink>
      ) : (
        <PreviousLink />
      )}
      {next ? (
        <NextLink
          element="p"
          family="header"
          weight={600}
          transform="capitalize"
        >
          <a href={`/newsfeed/${next.slug}`}>
            NEXT
            <Typography element="span" family="sans">
              {previous ? previous.title : next.title}
            </Typography>
          </a>
        </NextLink>
      ) : (
        <NextLink />
      )}
    </Wrapper>
  );
};

export default ArticleTrail;
