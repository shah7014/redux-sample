import * as EmailValidator from "email-validator";

export const getRequiredFieldValidation = (fieldName) => {
  return {
    required: {
      value: true,
      message: `${fieldName} is a required field`,
    },
  };
};

export const getEmailFieldValidation = (fieldName) => {
  return {
    validate: {
      emailInvalid: (fieldValue) => {
        return EmailValidator.validate(fieldValue) || "Email is Invalid";
      },
    },
    required: {
      value: true,
      message: "Email is a required field",
    },
  };
};
