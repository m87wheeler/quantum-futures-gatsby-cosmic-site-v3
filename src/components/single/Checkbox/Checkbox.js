import * as React from "react";
import Typography from "../Typography/Typography";

// *** data, hooks & context

// *** components

// *** styled components
import { Label, Element } from "./Checkbox.style";

const Checkbox = ({ label, onChange, name, checked, ...props }) => {
  return (
    <Label>
      <Element
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {label ? <Typography element="span">{label}</Typography> : null}
    </Label>
  );
};

export default Checkbox;
