import * as React from "react";
// import PropTypes from 'prop-types'
import ListContainer from "../../composite/ListContainer/ListContainer";
import NewsfeedCard from "../../composite/NewsfeedCard/NewsfeedCard";

// *** data, hooks & context

// *** components

// *** styled components

const NewsfeedList = ({ posts, layout, prefix, ...props }) => {
  return (
    <ListContainer layout={layout} {...props}>
      {posts &&
        posts.length &&
        posts.map(({ node }) => (
          <NewsfeedCard
            key={node.id}
            layout={layout}
            slug={node.slug}
            image={node.metadata.cover_image.imgix_url}
            title={node.title}
            created={node.created}
            type={node.metadata.post_type}
            author="Anonymous"
            content={node.content}
            prefix={prefix}
          />
        ))}
    </ListContainer>
  );
};

// NewsfeedList.defaultProps = {}

// NewsfeedList.propTypes = {}

export default NewsfeedList;
