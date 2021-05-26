import * as React from "react";

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
        transform="uppercase"
        style={{ paddingTop: "1rem" }}
      >
        Latest News
      </Typography>
      <NewsfeedList
        posts={posts}
        layout={width > 800 ? "grid" : "list"}
        prefix="newsfeed"
      />
    </Section>
  );
};

export default IndexNewsFeed;
