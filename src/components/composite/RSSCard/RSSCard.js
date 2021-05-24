import * as React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

// ***
import { stringToHTML } from "../../../assets/functions/stringToHtml";

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
} from "../NewsfeedCard/NewsfeedCard.style";

const RSSCard = ({
  layout = "grid",
  id,
  title,
  created,
  type,
  author,
  content,
  href,
  ...props
}) => {
  const [cardContent, setCardContent] = useState({
    img: null,
    text: null,
  });

  useEffect(() => {
    if (typeof window === undefined) return;
    const html = stringToHTML(content);
    const image = Array.from(html.children)[0].attributes.src.nodeValue;
    setCardContent((cardContent) => ({
      ...cardContent,
      img: image,
    }));
  }, [content]);

  return (
    <Link to={`/newsfeed/${id}`} style={{ textDecoration: "none" }}>
      <Wrapper layout={layout} {...props}>
        <ImageContainer layout={layout} img={cardContent.img} />
        <DetailsContainer layout={layout}>
          <Typography
            element="h3"
            variant="h6"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </Typography>
          <TypeDateContainer>
            <StyledTypeCard type={type} />
            <p>{new Date(created).toLocaleDateString()}</p>
          </TypeDateContainer>
          <Author>Written by {author}</Author>
          <HTMLContent dangerouslySetInnerHTML={{ __html: content }} />
        </DetailsContainer>
        <GradientMask />
      </Wrapper>
    </Link>
  );
};

export default RSSCard;
