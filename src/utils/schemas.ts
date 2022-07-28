import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  pword: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
  fullName: yup.string().required("Please enter your full name"),
  role: yup.string().required("Please select a role"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  pword: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
});
