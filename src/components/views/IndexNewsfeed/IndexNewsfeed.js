import * as React from "react";
// import PropTypes from 'prop-types'

// *** data, hooks & context
import { useBrowserResize } from "../../../hooks/useBrowserResize";

// *** components
import Section from "../../single/Section/Section";
import Typography from "../../single/Typography/Typography";
import NewsfeedList from "../NewsfeedList/NewsfeedList";

// *** styled components

const IndexNewsFeed = ({ background, posts, ...props }) => {
  const [width] = useBrowserResize();

  return (
    <Section background="white" {...props}>
      <Typography
        element="h3"
        variant="h3"
        align="center"
        gradient
        color="primary"
        style={{ paddingTop: "1rem" }}
      >
        Latest Stories
      </Typography>
      <NewsfeedList
        posts={posts}
        layout={width > 800 ? "grid" : "list"}
        prefix="newsfeed"
      />
    </Section>
  );
};

// IndexNewsFeed.defaultProps = {}

// IndexNewsFeed.propTypes = {}

export default IndexNewsFeed;
