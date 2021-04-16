import styled from "styled-components";
import SocialMediaIcons from "../../composite/SocialMediaIcons/SocialMediaIcons";

export const List = styled.ul``;
export const Wrapper = styled.footer`
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 1rem;
  gap: 1rem;
  width: 100%;
  padding: 3rem 1rem;
  background: ${(p) => `rgb(${p.theme.common.grey[800]})`};
  color: ${(p) => `rgb(${p.theme.common.white})`};

  li {
    list-style-type: none;
  }

  ${List} {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
    gap: 1rem;

    li {
      align-self: center;
    }

    ${List} {
      grid-column: 7 / 11;
    }
  }
`;

export const StyledSocialIcons = styled(SocialMediaIcons)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / 6;
  }
`;