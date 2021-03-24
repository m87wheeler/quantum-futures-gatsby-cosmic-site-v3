import styled from "styled-components";
import NewsfeedList from "../../components/views/NewsfeedList/NewsfeedList";

export const DisplayToggleWrapper = styled.div`
  position: sticky;
  top: 4.5rem;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 1rem;
  gap: 1rem;
  padding: 1rem;
  background: transparent;
  z-index: 99;

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
