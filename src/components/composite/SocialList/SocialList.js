import * as React from "react";

// *** data, hooks & context

// *** components

// *** styled components
import { Wrapper } from "./SocialList.style";

const SocialList = ({
  socialArr,
  background = "black",
  underline = false,
  ...props
}) => {
  return (
    <Wrapper background={background} underline={underline} {...props}>
      {socialArr &&
        socialArr.map(({ node }) => {
          return node.metadata.profile_active ? (
            <li key={node.id}>
              <a href={node.metadata.profile_link}>{node.title}</a>
            </li>
          ) : null;
        })}
    </Wrapper>
  );
};

export default SocialList;
