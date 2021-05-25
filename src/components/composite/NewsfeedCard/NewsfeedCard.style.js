import styled, { css } from "styled-components";
import TypeCard from "../../single/TypeCard/TypeCard";

const fillContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// ***
export const StyledTypeCard = styled(TypeCard)``;

// ***
export const ImageContainer = styled.div`
  min-height: 12rem;
  background-image: ${(p) => `url(${p.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 3s ease-in-out;

  ${(p) =>
    p.layout === "grid" &&
    css`
      ${fillContainer};
    `}

  ${(p) =>
    p.layout === "list" &&
    css`
      width: 8rem;
      height: 8rem;
    `}

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    ${(p) =>
      p.layout === "list" &&
      css`
        width: 10rem;
        height: 10rem;
      `}
  }
`;

// ***
export const TypeDateContainer = styled.div`
  display: flex;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  gap: 0.5rem;
  align-items: center;

  p {
    font-size: ${(p) => p.theme.font.size.xs};
  }
`;

// ***
export const Author = styled.sub``;

// ***
export const HTMLContent = styled.div`
  display: none;

  img {
    display: none !important;
  }

  @media (min-width: ${(p) => p.theme.media.media}) {
    display: block;
  }
`;

// ***
export const DetailsContainer = styled.div`
  z-index: 5;

  h3 {
    line-height: 1.1;
    text-transform: capitalize;
  }

  ${(p) =>
    p.layout === "grid" &&
    css`
      ${fillContainer};
      padding: 1rem;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-areas:
        "details"
        "author"
        "title";
      row-gap: 0.5rem;
      gap: 0.5rem;

      ${TypeDateContainer} {
        grid-area: details;

        p {
          color: ${(p) => `rgb(${p.theme.common.white})`};
        }
      }

      h3 {
        grid-area: title;
        align-self: flex-end;
        color: ${(p) => `rgb(${p.theme.common.white})`};
        font-size: ${(p) => p.theme.font.size.header.h4};
      }
    `}

  ${(p) =>
    p.layout === "list" &&
    css`
      height: 100%;
      display: grid;
      grid-template-rows: 1fr auto auto;
      align-content: flex-start;
      padding: 1rem;
      gap: 0.5rem;
      padding-right: 0;
      text-align: left;

      h3 {
        font-size: ${(p) => p.theme.font.size.header.h6};
        color: ${(p) => `rgb(${p.theme.common.black})`};
      }
    `}

    @media (min-width: ${(p) => p.theme.media.xs.min}) {
    ${(p) =>
      p.layout === "list" &&
      css`
        h3 {
          font-size: ${(p) => p.theme.font.size.header.h5};
        }

        ${StyledTypeCard} {
          font-size: ${(p) => p.theme.font.size.xxs};
        }
      `}
  }
`;

// ***
export const GradientMask = styled.div`
  ${fillContainer};

  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(17, 17, 17, 1) 100%
  );
  transition: background 0.3s ease-in-out;
  z-index: 1;
`;

// ***
export const Wrapper = styled.div`
  position: relative;
  transition: box-shadow 0.3s ease-in-out;
  background: ${(p) => `rgb(${p.theme.common.white})`};
  color: ${(p) => `rgb(${p.theme.common.black})`};
  cursor: pointer;
  overflow: hidden;

  ${(p) =>
    p.layout === "grid" &&
    css`
      width: 100%;
      height: 100%;
      min-height: 20rem;

      ${HTMLContent} {
        display: none;
      }

      ${Author} {
        color: ${(p) => `rgb(${p.theme.common.white})`};
        text-align: left;
      }
    `}

  ${(p) =>
    p.layout === "list" &&
    css`
      width: 100%;
      height: 12rem;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;

      ${GradientMask} {
        display: none;
      }
    `}

  &:hover {
    box-shadow: ${(p) => p.theme.shadow.main};

    ${ImageContainer} {
      transform: scale(1.1);
    }
  }

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    ${(p) =>
      p.layout === "list" &&
      css`
        height: 10rem;
      `}
  }
`;
