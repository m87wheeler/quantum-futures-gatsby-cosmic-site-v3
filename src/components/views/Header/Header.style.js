import styled, { css } from "styled-components";

import Hamburger from "../../single/Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";

export const StyledHamburger = styled(Hamburger)`
  position: relative;
  grid-column: 2 / 3;
  justify-self: flex-end;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: ${(p) => `rgb(${p.theme.common.white})`};

  ${(p) =>
    p.backdrop &&
    css`
      ${Backdrop} {
        top: 0;
      }
    `}
`;
