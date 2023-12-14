import React from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio as MuiRadio,
  FormHelperText,
} from "@mui/material";

const RadioGroup = ({
  control,
  name,
  label,
  validationRules,
  defaultValue,
  radioOptions,
  row,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{ ...validationRules }}
      render={({ field: { ref, ...rest }, fieldState: { error } }) => (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <MuiRadioGroup {...rest} ref={ref} row={row}>
            {radioOptions.map(({ label, value }) => (
              <FormControlLabel
                key={value}
                label={label}
                value={value}
                control={<MuiRadio />}
              />
            ))}
          </MuiRadioGroup>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default RadioGroup;
