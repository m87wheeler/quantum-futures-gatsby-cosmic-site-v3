import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${(p) => `rgb(${p.theme.common.black})`};

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ShareToIcons = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ftekeye.uk%2F
"
      >
        <StaticImage
          src={"../../../images/002-facebook-1.png"}
          alt="share to facebook"
          placeholder="blured"
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://twitter.com/share?url=http%3A%2F%2Ftekeye.uk%2F
"
      >
        <StaticImage
          src={"../../../images/005-twitter.png"}
          alt="share to twitter"
          placeholder="blured"
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://www.reddit.com/submit?url=http%3A%2F%2Ftekeye.uk%2F
"
      >
        <StaticImage
          src={"../../../images/004-reddit.png"}
          alt="share to reddit"
          placeholder="blured"
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Ftekeye.uk%2F
"
      >
        <StaticImage
          src={"../../../images/003-linkedin.png"}
          alt="share to linkedin"
          placeholder="blured"
          width={32}
          height={32}
        />
      </a>
    </Wrapper>
  );
};

export default ShareToIcons;
