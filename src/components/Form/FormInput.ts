import styled from "styled-components";

interface FormInputProps {
  dark?: boolean;
  error?: boolean;
}

const FormInput = styled.input<FormInputProps>`
  width: 100%;
  padding: 17.25px 16px;
  border-radius: 7px;
  border: 1px solid #eaeced;
  border-color: ${({ error }) => error && "crimson"};
  background: ${({ dark }) => (dark ? "#F3F4F5" : "#ffffff")};
  font-family: "Inter", sans-serif;

  &:focus-visible {
    outline-color: #7d5fff;
  }
  &::placeholder {
    letter-spacing: -0.02em;
  }
`;

export default FormInput;
