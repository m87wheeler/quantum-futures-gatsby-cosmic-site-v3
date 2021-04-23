import styled from "styled-components";
import Typography from "../../single/Typography/Typography";

export const PreviousLink = styled(Typography)`
  grid-column: 1 / 2;
`;
export const NextLink = styled(Typography)`
  grid-column: 2 / 3;
  text-align: right;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  p {
    color: ${(p) => `rgb(${p.theme.primary.main})`};

    a {
      text-decoration: none;

      span {
        display: block;
        text-align: inherit;
      }
    }
  }
`;
