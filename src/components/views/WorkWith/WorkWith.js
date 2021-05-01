import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Typography from "../../single/Typography/Typography";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 3rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background: ${(p) => `rgb(${p.theme.common.white})`};
  z-index: 10;
`;

const CompanyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  align-self: center;

  img {
    width: 100%;
    filter: saturate(0) brightness(1.5);
  }
`;

const WorkWith = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allCosmicjsWeWorkWith {
        edges {
          node {
            id
            title
            metadata {
              company_pngsvg {
                imgix_url
              }
            }
          }
        }
      }
    }
  `);

  const companies = data.allCosmicjsWeWorkWith.edges;

  return (
    <Wrapper {...props}>
      <Typography
        element="p"
        variant="h3"
        gradient
        color="primary"
        family="header"
        transform="uppercase"
        weight={600}
        align="center"
        style={{ marginBottom: "1.5rem" }}
      >
        We Work With
      </Typography>
      <CompanyContainer>
        {companies &&
          companies.length &&
          companies.map(({ node }) => (
            <LogoContainer key={node.id}>
              <img
                src={node.metadata.company_pngsvg.imgix_url}
                alt={node.title}
              />
            </LogoContainer>
          ))}
      </CompanyContainer>
    </Wrapper>
  );
};

export default WorkWith;
