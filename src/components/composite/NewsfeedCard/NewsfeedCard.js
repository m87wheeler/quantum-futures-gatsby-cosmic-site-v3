import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

// ***
import Typography from "../../single/Typography/Typography";

// ***
import {
  ImageContainer,
  StyledTypeCard,
  TypeDateContainer,
  DetailsContainer,
  Author,
  HTMLContent,
  GradientMask,
  Wrapper,
} from "./NewsfeedCard.style";

const NewfeedCard = ({
  layout = "grid",
  slug,
  image,
  title,
  created,
  type,
  author,
  content,
  children,
  href,
  prefix,
  ...props
}) => {
  return (
    <Link
      to={prefix ? `${prefix}/${slug}` : slug}
      style={{ textDecoration: "none" }}
    >
      <Wrapper layout={layout} {...props}>
        <ImageContainer layout={layout} img={image} />
        <DetailsContainer layout={layout}>
          {/* <h3>{title}</h3> */}
          <Typography element="h3" variant="h6">
            {title}
          </Typography>
          <TypeDateContainer>
            <StyledTypeCard type={type} />
            <p>{created}</p>
          </TypeDateContainer>
          <Author>Written by {author}</Author>
          <HTMLContent
            dangerouslySetInnerHTML={{
              __html: `${content.substr(0, 100)}<span>...</span>`,
            }}
          />
        </DetailsContainer>
        <GradientMask />
      </Wrapper>
    </Link>
  );
};

NewfeedCard.propTypes = {
  children: PropTypes.node,
};

export default NewfeedCard;
