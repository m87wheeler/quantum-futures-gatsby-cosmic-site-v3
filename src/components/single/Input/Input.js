import * as React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";

// *** data, hooks & context

// *** components

// *** styled components
const sharedStyle = css`
  width: 100%;
  background: ${(p) => `rgb(${p.theme.common.white})`};
  border: 0.125rem solid transparent;
  border-bottom: ${(p) => `.125rem solid rgb(${p.theme.common.grey[500]})`};
  border-radius: 0;
  padding: 0.5rem 0.75rem;
  font-size: ${(p) => p.theme.font.size.md};
  transition: border 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: ${(p) => `.125rem solid rgb(${p.theme.primary.main})`};
  }
`;
const InputElement = styled.input`
  ${sharedStyle}
`;
const TextArea = styled.textarea`
  font-family: ${(p) => p.theme.font.family.sans};
  resize: none;

  ${sharedStyle}
  min-height: 8rem;
`;
const Label = styled.label``;

const Input = ({
  type,
  label,
  color,
  name,
  value,
  onInput,
  required,
  disabled,
  ...props
}) => {
  if (
    type === "text" ||
    type === "number" ||
    type === "email" ||
    type === "password"
  ) {
    return (
      <Label>
        {label && <Typography color={color}>{label}</Typography>}
        <InputElement
          type={type}
          name={name}
          value={value}
          onInput={onInput}
          required={required}
          disabled={disabled}
          {...props}
        />
      </Label>
    );
  } else if (type === "textarea") {
    return (
      <Label>
        {label && <Typography color={color}>{label}</Typography>}
        <TextArea
          type={type}
          name={name}
          value={value}
          onInput={onInput}
          required={required}
          disabled={disabled}
          {...props}
        />
      </Label>
    );
  }
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "password", "textarea"]),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInput: PropTypes.func.isRequired,
};

export default Input;
