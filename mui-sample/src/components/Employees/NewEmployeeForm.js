import { DevTool } from "@hookform/devtools";
import { Button, Paper, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Controls } from "../control";

const NewEmployeeForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      gender: "male",
      department: "",
      isPermanent: false,
    },
  });

  const submitSuccessHandler = (data) => {
    console.log(data);
  };

  const submitErrorHandler = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <DevTool control={control} placement="top-right" />
      <Paper sx={{ padding: "16px", margin: "24px" }}>
        <form
          noValidate
          onSubmit={handleSubmit(submitSuccessHandler, submitErrorHandler)}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              rowGap: "8px",
              columnGap: "24px",
            }}
          >
            <Stack
              sx={{
                flexDirection: "column",
                gap: "16px",
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Controls.TextInput
                control={control}
                defaultValue={""}
                label={"Full Name"}
                name={"fullName"}
                validationRules={{
                  required: "Full Name is a required field",
                }}
                fullWidth
              />
              <Controls.TextInput
                control={control}
                defaultValue={""}
                label={"Email"}
                name={"email"}
                validationRules={{
                  required: "Email is a required field",
                }}
                fullWidth
              />
              <Controls.TextInput
                control={control}
                defaultValue={""}
                label={"Mobile"}
                name={"mobile"}
                validationRules={{
                  required: "Mobile is a required field",
                }}
                fullWidth
              />
              <Controls.TextInput
                control={control}
                defaultValue={""}
                label={"City"}
                name={"city"}
                fullWidth
              />
            </Stack>
            <Stack
              sx={{
                flexDirection: "column",
                gap: "16px",
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Controls.RadioGroup
                defaultValue={"male"}
                control={control}
                label={"Gender"}
                name={"gender"}
                validationRules={{}}
                radioOptions={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
                row={true}
              />
              <Controls.Select
                control={control}
                defaultValue={""}
                label={"Department"}
                name={"department"}
                options={[
                  { label: "Accounting", value: "accounting" },
                  { label: "Sales", value: "sales" },
                  { label: "Aquisition", value: "aquisition" },
                  { label: "Research", value: "research" },
                  { label: "IT", value: "information technology" },
                ]}
                validationRules={{ required: "Department is a required field" }}
              />
              <Controls.CheckBox
                control={control}
                defaultValue={false}
                label={"Permanent Employee"}
                name={"isPermanent"}
                validationRules={{}}
              />
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            gap={"8px"}
            sx={{ margin: "16px 0" }}
          >
            <Button type="submit" color="secondary" variant="contained">
              Submit
            </Button>
            <Button color="warning" variant="outlined">
              Reset
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

export default NewEmployeeForm;
