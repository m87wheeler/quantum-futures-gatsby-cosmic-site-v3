import styled from "styled-components";

import Hamburger from "../../single/Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";

export const Logo = styled.h1`
  padding-left: 1rem;

  span {
    display: block;
    font-size: ${(p) => p.theme.font.size.header.h4};
    line-height: 1;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 3;
  }
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 2 / 4;
    padding: 0;
  }
`;

export const StyledHamburger = styled(Hamburger)`
  margin-right: 1rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: none;
  }
`;

export const StyledNavMenu = styled(NavMenu)`
  position: fixed;
  top: 4.5rem;
  right: ${(p) => (p.active ? 0 : "-110vw")};
  width: 100%;
  height: calc(100vh - 4.5rem);
  transition: right 0.3s ease-in-out;
  z-index: 9999;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 3 / 13;
    position: relative;
    align-self: center;
    top: 0;
    right: 1rem;
    height: 100%;
    padding-left: 30%;
  }
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 4 / 12;
    right: 0;
  }
`;

export const Wrapper = styled.header`
  height: 4.5rem;
  width: 100%;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  backdrop-filter: blur(2px);
  color: ${(p) => `rgb(${p.theme.common.white})`};

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
`;
