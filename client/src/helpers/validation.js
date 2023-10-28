import * as yup from "yup";

// validate signup form before submission
export const validateSignUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  terms: yup.boolean().required("Please accept the terms and conditions"),
  });

// validate login form
export const validateLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const validateForgortPassSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const validateResetPassSchema = yup.object().shape({
  password: yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .required("Password is required"),
  confirm_password: yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match') // Compare with 'password'
  .required("Confirm Password is required"),
});
