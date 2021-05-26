import * as React from "react";

// *** data, hooks & context

// *** components
import ListContainer from "../../composite/ListContainer/ListContainer";
import NewsfeedCard from "../../composite/NewsfeedCard/NewsfeedCard";
import RSSCard from "../../composite/RSSCard/RSSCard";

// *** styled components

const NewsfeedList = ({ posts, layout, prefix, ...props }) => {
  return (
    <ListContainer layout={layout} {...props}>
      {posts.length && posts ? (
        posts.map((post) =>
          post.type === "TQD" ? (
            <RSSCard
              key={post.id}
              layout={layout}
              id={post.id}
              title={post.title[0]}
              created={new Date(post.created).toLocaleDateString()}
              type={post.category[0]}
              author={post.dc_creator}
              content={post.description[0]}
              href={post.link[0]}
            />
          ) : (
            <NewsfeedCard
              key={post.node ? post.node.id : post.id}
              layout={layout}
              slug={post.node ? post.node.slug : post.slug}
              image={
                post.node
                  ? post.node.metadata.cover_image.imgix_url
                  : post.metadata.cover_image.imgix_url
              }
              title={post.node ? post.node.title : post.title}
              created={new Date(
                post.node ? post.node.created : post.created
              ).toLocaleDateString()}
              type={
                post.node
                  ? post.node.metadata.post_type
                  : post.metadata.post_type
              }
              author="Quantum Futures"
              content={post.node ? post.node.content : post.content}
              prefix={prefix}
            />
          )
        )
      ) : (
        <p>No Posts...</p>
      )}
    </ListContainer>
  );
};

export default NewsfeedList;
