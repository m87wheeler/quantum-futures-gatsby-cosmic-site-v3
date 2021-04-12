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

  // ! FOLLOWUP removed as per client feedback
  /* @media (min-width: ${(p) => p.theme.media.md.min}) {
    height: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  } */
`;

export const Collapse = styled(List)`
  padding-right: 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: padding 0.2s ease-in-out, max-height 0.2s ease-in-out;

  // ! FOLLOWUP removed as per client feedback
  /* @media (min-width: ${(p) => p.theme.media.md.min}) {
    position: absolute;
    top: 100%;
    left: auto;
    right: 0;
    flex-flow: column nowrap;
    max-height: 0;
    height: auto;
    padding: 0 2rem;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  } */
`;

export const ListItem = styled.li`
  position: relative;
  color: ${(p) => `rgb(${p.theme.common.white})`};
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
    `}// ! FOLLOWUP removed as per client feedback
  /* @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: ${(p) => p.theme.font.size.md};
    height: 100%;

    ${(p) =>
    p.active &&
    css`
      ${Collapse} {
        max-height: 100vh;
        padding: 1rem 2rem;
        overflow: visible;
      }
    `}
  } */
`;

export const Wrapper = styled.nav`
  padding: 3rem 1.5rem;
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  backdrop-filter: blur(2px);
  color: ${(p) => `rgb(${p.theme.common.white})`};
  z-index: 9999;

  // ! FOLLOWUP removed as per client feedback
  /* @media (min-width: ${(p) => p.theme.media.md.min}) {
    padding: 0;
    background: transparent;
    backdrop-filter: none;
  } */

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    clip-path: polygon(60% 0%, 100% 0, 100% 100%, 35% 100%);
  }
`;
