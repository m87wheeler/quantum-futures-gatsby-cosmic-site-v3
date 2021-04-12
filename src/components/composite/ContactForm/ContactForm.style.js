import styled from "styled-components";
import Button from "../../single/Button/Button";
import Typography from "../../single/Typography/Typography";

export const FormFeedback = styled(Typography)`
  display: grid;
  align-items: center;
  justify-items: center;
  min-height: 2rem;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    align-self: flex-end;
  }
`;
