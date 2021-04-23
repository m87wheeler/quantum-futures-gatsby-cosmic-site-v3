import * as React from "react";
import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

const ShareToIcons = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ftekeye.uk%2F
"
      >
        Facebook |{" "}
      </a>
      <a
        href="https://twitter.com/share?url=http%3A%2F%2Ftekeye.uk%2F
"
      >
        Twitter |{" "}
      </a>
      <a
        href="https://www.reddit.com/submit?url=http%3A%2F%2Ftekeye.uk%2F
"
      >
        Reddit |{" "}
      </a>
      <a
        href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Ftekeye.uk%2F
"
      >
        LinkedIn
      </a>
    </Wrapper>
  );
};

export default ShareToIcons;
