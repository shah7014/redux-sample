import React from "react";
import {
  FormControl,
  FormLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Select = ({
  control,
  name,
  label,
  validationRules,
  defaultValue,
  options,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{ ...validationRules }}
      render={({ field: { ref, ...rest }, fieldState: { error } }) => (
        <FormControl error={error}>
          <FormLabel>{label}</FormLabel>
          <MuiSelect {...rest} ref={ref}>
            {options.map(({ label, value }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </MuiSelect>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default Select;
