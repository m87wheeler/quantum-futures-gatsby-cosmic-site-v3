import styled, { css } from "styled-components";
import { Link } from "gatsby";

import Hamburger from "../../single/Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";
import QFLogo from "../../../assets/svg/QFLogo";

export const LogoLink = styled(Link)`
  /* padding-left: 1rem; */

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 3;
  }
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 2 / 4;
    padding: 0;
  }
`;

export const StyledMainLogo = styled(QFLogo)`
  height: 3rem;
  width: auto;
`;

export const StyledHamburger = styled(Hamburger)`
  position: relative;
  z-index: 99999;
`;

export const StyledNavMenu = styled(NavMenu)`
  position: fixed;
  top: 0;
  right: ${(p) => (p.active ? 0 : "-110vw")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s ease-in-out;
  z-index: 9999;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: -4.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  backdrop-filter: blur(2px);
  transition: top 0.3s ease-in-out;
`;

export const Wrapper = styled.header`
  height: 4.5rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => `rgb(${p.theme.common.white})`};

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding: 0 calc((100vh / 12) * 2);
  }

  ${(p) =>
    p.backdrop &&
    css`
      ${Backdrop} {
        top: 0;
      }
    `}
`;
