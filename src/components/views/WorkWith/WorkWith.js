import * as React from "react";
import { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// *** data, hooks & context
import { useScroll } from "../../../hooks/useScroll";

// *** components
import Typography from "../../single/Typography/Typography";

// *** styled components
import {
  appearDuration,
  classes,
  Wrapper,
  Logo,
  CompanyContainer,
} from "./WorkWith.style";

const WorkWith = ({ ...props }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (typeof window === undefined) return;
    if (scrollY > window.innerHeight * 0.75) setFadeIn(true);
  }, [scrollY]);

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
          companies.map(({ node }, i) => (
            <CSSTransition
              key={node.id}
              in={fadeIn}
              timeout={appearDuration}
              classNames={classes.hero}
              appear
            >
              <Logo
                delay={i}
                src={node.metadata.company_pngsvg.imgix_url}
                alt={node.title}
              />
            </CSSTransition>
          ))}
      </CompanyContainer>
    </Wrapper>
  );
};

export default WorkWith;
