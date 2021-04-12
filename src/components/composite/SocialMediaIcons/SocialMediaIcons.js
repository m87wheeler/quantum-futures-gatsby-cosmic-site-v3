import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import SvgIcon from "../../single/SvgIcon/SvgIcon";

// *** styled components
const LinkWrapper = styled((props) => <Link {...props} />)``;
const Wrapper = styled.ul`
  justify-self: center;
  display: flex;
  flex-flow: row nowrap !important;
  row-gap: 1rem;
  gap: 1rem;

  li {
    width: 2rem;
    height: 2rem;
    padding: 0.375rem;
    background: ${(p) => `rgba(${p.theme.primary.main}, 0)`};
    /* border-radius: 0.25rem; */
    border-radius: 100%;
    transition: background 0.2s ease-in-out;

    ${LinkWrapper} {
      width: 1.25rem;
      height: 1.25rem;

      svg {
        width: inherit;
        height: inherit;

        g,
        path {
          fill: ${(p) => `rgb(${p.theme.primary.main})`};
          transition: fill 0.2s ease-in-out;
        }
      }
    }

    &:hover {
      background: ${(p) => `rgba(${p.theme.primary.main}, .75)`};

      svg {
        path {
          fill: ${(p) => `rgb(${p.theme.common.grey[800]})`};
        }
      }
    }
  }
`;

const SocialMediaIcons = ({ ...props }) => {
  const result = useStaticQuery(graphql`
    query {
      allCosmicjsSocialMedia(sort: { fields: title }) {
        edges {
          node {
            id
            title
            metadata {
              profile_active
              profile_link
            }
          }
        }
      }
    }
  `);

  const data = result.allCosmicjsSocialMedia.edges;
  const icons = {
    facebook: {
      viewBox: "0 0 24 24",
      path: (
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"
        />
      ),
    },
    instagram: {
      viewBox: "0 0 511 511.9",
      path: (
        <g>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0074.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3zm0 0M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0"
          />
        </g>
      ),
    },
    youtube: {
      viewBox: "0 0 640 640",
      path: (
        <path d="M626.814 165.789c-7.375-27.412-28.992-49.02-56.407-56.401-50.082-13.7-250.414-13.7-250.414-13.7s-200.325 0-250.407 13.18c-26.887 7.373-49.031 29.513-56.406 56.92C0 215.857 0 319.689 0 319.689s0 104.355 13.18 153.898c7.383 27.408 28.992 49.016 56.41 56.398C120.196 543.688 320 543.688 320 543.688s200.325 0 250.407-13.181c27.418-7.377 49.032-28.986 56.415-56.394 13.175-50.07 13.175-153.898 13.175-153.898s.528-104.36-13.183-154.426zM256.21 415.61V223.764l166.587 95.924zm0 0" />
      ),
    },
    linkedin: {
      viewBox: "0 0 24 24",
      path: (
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"
        />
      ),
    },
  };

  return (
    <Wrapper {...props}>
      {data.map(({ node }) => {
        if (node.metadata.profile_active) {
          return (
            <li key={node.id}>
              <LinkWrapper to={node.metadata.profile_link}>
                <SvgIcon viewBox={icons[node.title.toLowerCase()].viewBox}>
                  {icons[node.title.toLowerCase()].path}
                </SvgIcon>
              </LinkWrapper>
            </li>
          );
        } else return null;
      })}
    </Wrapper>
  );
};

// SocialMediaIcons.defaultProps = {}

// SocialMediaIcons.propTypes = {}

export default SocialMediaIcons;
