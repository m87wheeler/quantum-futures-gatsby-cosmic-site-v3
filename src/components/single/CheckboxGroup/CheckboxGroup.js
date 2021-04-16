import * as React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  row-gap: 1rem;
  gap: 1rem;
  justify-content: center;
`;

const Label = styled.label`
  color: ${(p) => `rgb(${p.theme.common.white})`};
`;

const CheckboxGroup = ({ onChange, state, options, ...props }) => {
  return (
    <Wrapper {...props}>
      {options.map((option) => (
        <Label key={option.name}>
          {option.label}{" "}
          <input
            type="checkbox"
            name={option.name}
            disabled={option.disabled}
            checked={state[option.name] === true}
            onChange={onChange}
          />
        </Label>
      ))}
    </Wrapper>
  );
};

// CheckboxGroup.defaultProps = {}

// CheckboxGroup.propTypes = {}

export default CheckboxGroup;
