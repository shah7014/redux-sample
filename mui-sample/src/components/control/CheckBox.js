import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const CheckBox = ({
  control,
  name,
  label,
  validationRules,
  defaultValue,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ ...validationRules }}
      render={({ field: { ref, ...rest } }) => (
        <FormControlLabel
          control={<MuiCheckbox />}
          {...rest}
          checked={rest.value}
          onChange={(e) => rest.onChange(e.target.checked)}
          ref={ref}
          label={label}
        />
      )}
    />
  );
};

export default CheckBox;
