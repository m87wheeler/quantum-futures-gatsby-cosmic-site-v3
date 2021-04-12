import styled from "styled-components";
import Typography from "../../components/single/Typography/Typography";
import InnerHTML from "../../components/single/InnerHTML/InnerHTML";
import Button from "../../components/single/Button/Button";
import TypeCard from "../../components/single/TypeCard/TypeCard";

export const CoverImageContainer = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 20rem;
  padding: 1.5rem 1rem 0;
  background: ${(p) => `rgba(${p.theme.common.black})`};
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};

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

export const Title = styled(Typography)`
  padding: 1rem;
  background: ${(p) => `rgba(${p.theme.common.black})`};
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 7 / 13;
    margin-left: -1rem;
  }
`;

export const StyledTypeCard = styled(TypeCard)`
  grid-area: type;
  align-self: center;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    align-self: flex-start;
  }
`;

export const PostDetails = styled.div`
  position: sticky;
  top: 4.5rem;
  left: 0;
  grid-column: 1 / span 6;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template: 1fr 1fr / auto 1fr;
  grid-template-areas:
    "type date"
    "type author";
  background: ${(p) => `rgba(${p.theme.common.black})`};
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  backdrop-filter: blur(2px);
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: ${(p) => p.theme.shadow.main};

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    position: relative;
    top: 0;
    grid-column: 7 / 13;
    grid-row: 2 / 3;
    margin: -1rem 0 0 -1rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const StyledInnerHTML = styled(InnerHTML)`
  padding: 2rem;
  text-align: justify;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    text-align: left;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / 12;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 2 / 8;
    padding: 1rem 0;
  }
`;

export const BackButton = styled(Button)`
  position: fixed;
  bottom: ${(p) => (p.direction === "down" ? "1rem" : "-10vh")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.3s ease-in-out;
`;

export const DummyAside = styled.aside`
  display: none;

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    display: flex;
    flex-flow: column nowrap;
    column-gap: 1rem;
    gap: 1rem;
    grid-column: 9 / 12;
    width: 100%;
    height: calc(100vh - 4.5rem - 2rem);
    position: sticky;
    top: 5.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background: ${(p) => `rgba(${p.theme.common.black})`};
    background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  }
`;
