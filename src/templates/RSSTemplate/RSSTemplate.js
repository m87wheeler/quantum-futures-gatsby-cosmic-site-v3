import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useScroll } from "../../hooks/useScroll";

// ***
import { stringToHTML } from "../../assets/functions/stringToHtml";

// *** components
import Layout from "../../style/Layout";
import TypeCard from "../../components/single/TypeCard/TypeCard";
import Typography from "../../components/single/Typography/Typography";

// *** styled components
import {
  PostDetails,
  Title,
  CoverImageContainer,
  CoverImage,
  StyledInnerHTML,
  // StyledRelatedContent,
  BackButton,
  StyledArticleTrail,
} from "../NewsfeedTemplate/NewsfeedTemplate.style";
const RSSContent = styled(StyledInnerHTML)`
  img {
    display: none !important;
  }
`;

const RSSTemplate = ({ pageContext }) => {
  const { scrollDirection } = useScroll();
  const [cardContent, setCardContent] = useState({
    img: null,
    text: null,
  });
  const {
    title,
    created,
    post_type,
    content,
    link,
    previous,
    next,
  } = pageContext;

  useEffect(() => {
    if (typeof window === undefined) return;
    window.scrollTo(0, 0);
    const html = stringToHTML(content);
    const image = Array.from(html.children)[0].attributes.src.nodeValue;
    setCardContent((cardContent) => ({
      ...cardContent,
      img: image,
    }));
  }, [content]);

  return (
    <Layout>
      <PostDetails>
        <TypeCard type={post_type} />
        <Typography size="xs">
          {new Date(created).toLocaleDateString()}
        </Typography>
        <Typography size="xs">|</Typography>
        <Typography size="xs">Quantum Futures</Typography>
      </PostDetails>
      <Title element="h2" variant="h3" transform="uppercase">
        {title}
      </Title>
      <CoverImageContainer>
        <CoverImage img={cardContent.img} />
      </CoverImageContainer>
      <RSSContent
        html={`<article><p>${content[0]} <a href={${link}} target='_blank'>Continue Reading - Visit TQD</a></p></article>`}
      />
      <StyledArticleTrail
        previous={
          previous
            ? {
                slug: previous.id,
                title: previous.title[0],
              }
            : null
        }
        next={
          next
            ? {
                slug: next.id,
                title: next.title[0],
              }
            : null
        }
      />
      <Link to="/newsfeed">
        <BackButton color="primary" shadow direction={scrollDirection}>
          Go Back
        </BackButton>
      </Link>
      {/* <StyledRelatedContent />  */}
    </Layout>
  );
};

export default RSSTemplate;
