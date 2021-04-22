import * as React from "react";
import { graphql, Link } from "gatsby";
import { useScroll } from "../../hooks/useScroll";
import { Helmet } from "react-helmet";
import { capitalizeString } from "../../assets/functions/capitalizeString";
import Layout from "../../style/Layout";
import Typography from "../../components/single/Typography/Typography";

// *** styled components
import {
  CoverImageContainer,
  CoverImage,
  Title,
  PostDetails,
  StyledInnerHTML,
  BackButton,
  StyledTypeCard,
  DummyAside,
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
        {/* * TODO change grid styling in Layout */}
        <CoverImageContainer>
          <CoverImage img={cover_image} />
        </CoverImageContainer>
        <Title element="h2" variant="h4" color="white">
          {title}
        </Title>
        <PostDetails>
          <StyledTypeCard type={post_type} />
          <Typography size="xs" color="white" align="right">
            {created}
          </Typography>
          <Typography size="xs" color="white" align="right">
            Quantum Futures
          </Typography>
        </PostDetails>
        <StyledInnerHTML html={data.cosmicjsBlogPosts.content} />
        <Link to="/newsfeed">
          <BackButton color="primary" shadow direction={scrollDirection}>
            Go Back
          </BackButton>
        </Link>
        <DummyAside>
          <Typography gradient color="primary" weight="900" size="xl">
            Dummy Aside Content For Screens &gt;1280px wide
            {/** TODO 3 most recent articles relating to category **/}
            {/** TODO prioritise quantum futures content - date ? **/}
            {/** 2 weeks maximum **/}
          </Typography>
        </DummyAside>
        {/** NEXT and PREV button */}
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
