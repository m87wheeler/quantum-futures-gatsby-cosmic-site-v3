import * as React from "react";
import { useEffect } from "react";
import { graphql, Link } from "gatsby";
import { useScroll } from "../../hooks/useScroll";
import { Helmet } from "react-helmet";
import { capitalizeString } from "../../assets/functions/capitalizeString";

// *** components
import Layout from "../../style/Layout";
import TypeCard from "../../components/single/TypeCard/TypeCard";
import Typography from "../../components/single/Typography/Typography";
import ShareToIcons from "../../components/composite/ShareToIcons/ShareToIcons";

// *** styled components
import {
  PostDetails,
  ShareDetails,
  Title,
  CoverImageContainer,
  CoverImage,
  StyledInnerHTML,
  StyledRelatedContent,
  BackButton,
  StyledArticleTrail,
} from "./NewsfeedTemplate.style";

const NewsfeedTemplate = ({ pageContext, data }) => {
  const {
    title,
    cover_image,
    post_type,
    created,
    metadata: { title_prefix, canonical, description, keywords },
    next,
    previous,
  } = pageContext;
  const { scrollDirection } = useScroll();

  // ? scroll to top on page load
  useEffect(() => {
    if (typeof window !== undefined) window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet
        title={`${title_prefix} | ${capitalizeString(title)}`}
        canonical={canonical}
        description={description}
        keywords={keywords}
      />
      <Layout>
        {/** grid-row: 1 / 2 */}
        <PostDetails>
          <TypeCard type={post_type} />
          <Typography size="xs">{created}</Typography>
          <Typography size="xs">|</Typography>
          <Typography size="xs">Quantum Futures</Typography>
        </PostDetails>
        {/** grid-row: 2 / 3 */}
        <Title element="h2" variant="h1" transform="uppercase">
          {title}
        </Title>
        {/** grid-row: 3 / 4 */}
        <CoverImageContainer>
          <CoverImage img={cover_image} />
        </CoverImageContainer>
        {/** grid-row: 4 / 5 */}
        <StyledInnerHTML html={data.cosmicjsBlogPosts.content} />
        {/** grid-row: 5 / 6 */}
        <ShareDetails>
          <Typography element="p">Share</Typography>
          <Typography size="xs">|</Typography>
          <ShareToIcons />
        </ShareDetails>
        {/** grid-row: 6 / 7 */}
        <StyledArticleTrail previous={previous} next={next} />
        <Link to="/newsfeed">
          <BackButton color="primary" shadow direction={scrollDirection}>
            Go Back
          </BackButton>
        </Link>
        <StyledRelatedContent />
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
