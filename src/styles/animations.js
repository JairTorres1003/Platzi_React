import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

const LoadInKeyframes = keyframes`
  0%, 100% {
    clip: rect(0px, 210px, 210px, 208px);
  }
  25% {
    clip: rect(208px, 210px, 210px, 0px);
  }
  50% {
    clip: rect(0px, 2px, 210px, 0px);
  }
  75% {
    clip: rect(0px, 210px, 2px, 0px);
  }
`;

export const LoadIn = ({ time = "4s" } = {}) =>
  css`
    animation: ${time} ${LoadInKeyframes} linear infinite;
  `;
