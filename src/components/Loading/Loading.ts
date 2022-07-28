import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #7d5fff;
  border-top-color: #fff;
  animation: 0.8s ${spin} infinite linear;
`;

export default Loading;
