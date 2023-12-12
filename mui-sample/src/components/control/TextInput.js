import React from "react";
import { Controller } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

const TextInput = ({
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
      rules={{ ...validationRules }}
      defaultValue={defaultValue}
      render={({ field: { ref, ...rest }, fieldState: { error } }) => (
        <MuiTextField
          {...props}
          {...rest}
          label={label}
          ref={ref}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextInput;
