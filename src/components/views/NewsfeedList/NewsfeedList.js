import * as React from "react";

// *** data, hooks & context

// *** components
import ListContainer from "../../composite/ListContainer/ListContainer";
import NewsfeedCard from "../../composite/NewsfeedCard/NewsfeedCard";
import RSSCard from "../../composite/RSSCard/RSSCard";

// *** styled components

const NewsfeedList = ({ posts, layout, prefix, ...props }) => {
  console.log(posts);
  return (
    <ListContainer layout={layout} {...props}>
      {posts.length && posts ? (
        posts.map((post) =>
          post.type === "CosmicJS" ? (
            <NewsfeedCard
              key={post.id}
              layout={layout}
              slug={post.slug}
              image={post.metadata.cover_image.imgix_url}
              title={post.title}
              created={new Date(post.created).toLocaleDateString()}
              type={post.metadata.post_type}
              author="Quantum Futures"
              content={post.content}
              prefix={prefix}
            />
          ) : (
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
          )
        )
      ) : (
        <p>No Posts...</p>
      )}
    </ListContainer>
  );
};

export default NewsfeedList;
