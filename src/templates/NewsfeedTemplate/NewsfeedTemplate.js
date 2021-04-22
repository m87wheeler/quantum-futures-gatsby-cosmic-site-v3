import * as React from "react";
import { graphql, Link } from "gatsby";
import { useScroll } from "../../hooks/useScroll";
import { Helmet } from "react-helmet";
import { capitalizeString } from "../../assets/functions/capitalizeString";

// *** components
import Layout from "../../style/Layout";
import TypeCard from "../../components/single/TypeCard/TypeCard";
import Typography from "../../components/single/Typography/Typography";

// *** styled components
import {
  PostDetails,
  ShareDetails,
  Title,
  CoverImageContainer,
  CoverImage,
  StyledInnerHTML,
  BackButton,
} from "./NewsfeedTemplate.style";

const NewsfeedTemplate = ({ pageContext, data }) => {
  const {
    title,
    cover_image,
    post_type,
    created,
    metadata: { title_prefix, canonical, description, keywords },
  } = pageContext;
  const { scrollDirection } = useScroll();

  return (
    <>
      <Helmet
        title={`${title_prefix} | ${capitalizeString(title)}`}
        canonical={canonical}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <PostDetails>
          <TypeCard type={post_type} />
          <Typography size="xs">{created}</Typography>
          <Typography size="xs">|</Typography>
          <Typography size="xs">Quantum Futures</Typography>
        </PostDetails>
        <Title element="h2" variant="h1" transform="uppercase">
          {title}
        </Title>
        <ShareDetails>
          <Typography element="p">Share</Typography>
          <Typography size="xs">|</Typography>
        </ShareDetails>
        <CoverImageContainer>
          <CoverImage img={cover_image} />
        </CoverImageContainer>
        <StyledInnerHTML html={data.cosmicjsBlogPosts.content} />
        <Link to="/newsfeed">
          <BackButton color="primary" shadow direction={scrollDirection}>
            Go Back
          </BackButton>
        </Link>
      </Layout>
    </>
  );
};

export default NewsfeedTemplate;

export const query = graphql`
  query($slug: String!) {
    cosmicjsBlogPosts(slug: { eq: $slug }) {
      content
    }
  }
`;
