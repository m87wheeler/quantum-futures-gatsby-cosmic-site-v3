import styled from "styled-components";
import Typography from "../../components/single/Typography/Typography";
import NewsfeedList from "../../components/views/NewsfeedList/NewsfeedList";

export const DisplayToggleWrapper = styled.div`
  position: sticky;
  top: 4.5rem;
  left: 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title title"
    "filter toggle";
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  background: transparent;
  z-index: 99;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-height: 5rem;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding: 1rem calc(100vw / 12);
  }
`;

export const StyledNewsfeedList = styled(NewsfeedList)`
  padding-bottom: 1rem !important;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }

  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    padding: 1rem calc(100vw / 12) !important;
  }
`;

export const Title = styled(Typography)`
  grid-area: title;
`;
