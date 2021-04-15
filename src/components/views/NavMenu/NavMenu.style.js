import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)`
  &.fa-chevron-left {
    width: 0.75rem;
    margin-right: 1rem;
    transition: transform 0.2s ease-in-out;
  }
`;

export const List = styled.ul`
  position: relative;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  column-gap: 1rem;
  gap: 1rem;
  list-style: none;
  text-align: right;
  opacity: 1;
`;

export const Collapse = styled(List)`
  padding-right: 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: padding 0.2s ease-in-out, max-height 0.2s ease-in-out;
`;

const ListItemStyles = css`
  position: relative;
  color: ${(p) => `rgb(${p.theme.common.black})`};
  font-size: ${(p) => p.theme.font.size.header.h4};
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(p) => `rgb(${p.theme.secondary.main})`};
  }

  ${(p) =>
    p.active &&
    css`
      color: ${(p) => `rgb(${p.theme.secondary.main})`};

      ${Icon} {
        transform: rotate(-90deg);
      }

      ${Collapse} {
        padding-top: 1rem;
        max-height: 100vh;
      }
    `}

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    font-size: ${(p) => p.theme.font.size.header.h3};
  }
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    font-size: ${(p) => p.theme.font.size.header.h2};
  }
`;

export const ListItem = styled.li`
  ${ListItemStyles};

  a {
    ${ListItemStyles}
  }
`;

export const Wrapper = styled.nav`
  padding: 7.5rem 1.5rem 3rem;
  background: ${(p) => `rgba(${p.theme.common.white}, .95)`};
  backdrop-filter: blur(2px);
  z-index: 99;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    padding-right: calc(100vw / 12);
    clip-path: polygon(60% 0%, 100% 0, 100% 100%, 35% 100%);
  }
`;
