import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Location = styled.p`
  color: ${(p) => `rgb(${p.theme.primary.main})`};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  column-gap: 1rem;
  gap: 1rem;
  padding: 3rem;
  max-width: 50%;
  background: ${(p) => `rgb(${p.theme.common.black})`};
  color: white;
  border: 1px solid rgb(233, 22, 255);
  transition: background 0.3s ease-in-out;
  cursor: pointer;

  h4 {
    font-size: ${(p) => p.theme.font.size.header.h5};
    font-weight: 400;
  }
`;

const CareerPost = ({
  jobRole,
  company,
  location,
  created,
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <h4>{jobRole}</h4>
      <p>{company}</p>
      <Location>{location}</Location>
    </Wrapper>
  );
};

CareerPost.propTypes = {
  children: PropTypes.node,
};

export default CareerPost;
