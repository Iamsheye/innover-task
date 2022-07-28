import styled from "styled-components";

const FormSelect = styled.select`
  color: #667085;
  width: 100%;
  padding: 16.5px 12px;
  font-weight: 500;
  font-size: 0.95rem;
  background: #f9fbfc;
  border-radius: 7px;
  border: 1px solid #eaeced;
  letter-spacing: -0.03em;
  font-family: "Inter", sans-serif;

  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;

  &:focus-visible {
    outline-color: #7d5fff;
  }
`;

export default FormSelect;
