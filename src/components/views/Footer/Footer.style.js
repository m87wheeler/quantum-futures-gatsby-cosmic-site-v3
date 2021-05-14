import styled from "styled-components";
import SocialList from "../../composite/SocialList/SocialList";

export const Wrapper = styled.footer`
  height: auto;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "contact contact"
    "navigation social"
    "address other"
    "creator creator";
  gap: 3rem;
  background: ${(p) => `rgb(${p.theme.common.black})`};

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    padding: calc(((100vw / 12) + 1rem) / 2) calc((100vw / 12) + 1rem);
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "contact navigation social"
      "creator address other";
    gap: 1rem;
  }

  a {
    color: ${(p) => `rgb(${p.theme.secondary.main})`} !important;
  }
`;

export const FootSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: ${(p) => `rgb(${p.theme.common.white})`};
  gap: 1.5rem;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    gap: 0.5rem;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  list-style-type: none;
  font-family: ${(p) => p.theme.font.family.header};

  li {
    a {
      padding: 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(p) => `rgb(${p.theme.common.white})`} !important;
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      a {
        color: ${(p) => `rgb(${p.theme.primary.main})`} !important;
      }
    }
  }
`;

export const Creators = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;

  p {
    padding-left: 0.5rem;
    border-left: ${(p) => `0.25rem solid rgb(${p.theme.secondary.main})`};
  }
`;

export const Address = styled.address`
  font-style: normal;

  span {
    display: block;
  }
`;
export const ContactDetail = styled.a``;

export const StyledSocialList = styled(SocialList)`
  a {
    color: ${(p) => `rgb(${p.theme.common.white})`} !important;

    &:hover {
      a {
        color: ${(p) => `rgb(${p.theme.primary.main})`} !important;
      }
    }
  }
`;
