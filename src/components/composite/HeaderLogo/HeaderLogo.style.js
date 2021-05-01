import { Link } from "gatsby";
import styled from "styled-components";
import QFLogo from "../../../assets/svg/QFLogo";

export const StyledMainLogo = styled(QFLogo)`
  height: 2.5rem;
  width: auto;
  margin: -1rem -0.5rem 0 0;
`;

export const LogoLink = styled(Link)`
  margin-top: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;
