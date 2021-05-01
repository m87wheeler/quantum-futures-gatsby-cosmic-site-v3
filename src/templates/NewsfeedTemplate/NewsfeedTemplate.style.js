import styled from "styled-components";
import Button from "../../components/single/Button/Button";
import InnerHTML from "../../components/single/InnerHTML/InnerHTML";
import Typography from "../../components/single/Typography/Typography";
import RelatedContent from "../../components/views/RelatedContent/RelatedContent";
import ArticleTrail from "../../components/composite/ArticleTrail/ArticleTrail";

const Details = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem 2rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    padding: 1rem 0 2rem;
    grid-column: 2 / 12;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    grid-column: 2 / 9;
  }
`;

export const PostDetails = styled(Details)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-row: 1 / 2;
  }
`;

export const Title = styled(Typography)`
  padding: 0 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-row: 2 / 3;
    grid-column: 2 / 12;
    padding: 1rem 0;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    grid-column: 2 / 8;
  }
`;

export const CoverImageContainer = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 20rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / 12;
    grid-row: 3 / 4;
    padding: 1rem 0;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    grid-column: 2 / 8;
  }
`;

export const StyledInnerHTML = styled(InnerHTML)`
  padding: 1rem;
  text-align: justify;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-row: 4 / 5;
    grid-column: 2 / 12;
    text-align: left;
    padding: 1rem 0;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    grid-column: 2 / 8;
  }
`;

export const ShareDetails = styled(Details)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-row: 5 / 6;
    grid-column: 2 / 12;
  }
`;

export const StyledArticleTrail = styled(ArticleTrail)`
  padding: 1rem;
  margin-bottom: 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / 9;
    grid-row: 6 / 7;
  }
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(p) => `url(${p.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const StyledRelatedContent = styled(RelatedContent)`
  position: sticky;
  top: 5.5rem;
  left: 0;
  margin-bottom: 1rem;
  grid-column: 9 / 12;
  grid-row: 2 / 6;
`;

export const BackButton = styled(Button)`
  position: fixed;
  bottom: ${(p) => (p.direction === "down" ? "1rem" : "-10vh")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.3s ease-in-out;
`;
