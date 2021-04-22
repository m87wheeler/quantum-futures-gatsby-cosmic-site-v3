import styled from "styled-components";
import Button from "../../components/single/Button/Button";
import InnerHTML from "../../components/single/InnerHTML/InnerHTML";

export const Details = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ShareDetails = styled(Details)`
  padding-top: 0;
  padding-bottom: 2rem;
`;

export const CoverImageContainer = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 20rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 7;
    grid-row: 1 / 3;
    padding-bottom: 1rem;
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
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    margin-left: calc((100vw / 12) - 1rem);
    width: calc((100vw / 12) * 4);
  }
`;

export const StyledInnerHTML = styled(InnerHTML)`
  padding: 1rem 2rem;
  text-align: justify;
`;

export const BackButton = styled(Button)`
  position: fixed;
  bottom: ${(p) => (p.direction === "down" ? "1rem" : "-10vh")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.3s ease-in-out;
`;
