import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Typography from "../../components/single/Typography/Typography";
import Button from "../../components/single/Button/Button";

export const Title = styled(Typography)`
  align-self: center;
  font-size: 8rem;
  line-height: 1;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    font-size: 12rem;
  }
`;

export const Message = styled(Typography)``;

export const BackButton = styled(Button)``;

export const ButtonLink = styled((props) => <Link {...props} />)`
  color: ${(p) => `rgb(${p.theme.primary.main})`};
  text-decoration: none;
  text-align: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(p) => `rgb(${p.theme.common.white})`};
  }
`;

export const FlexGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  padding: 1rem;
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    ${Title}, ${Message}, ${BackButton} {
      grid-column: 1 / 13;
    }
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }
`;
