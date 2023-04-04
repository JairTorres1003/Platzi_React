import styled from "styled-components";
import { LoadIn } from "../../styles/animations";

export const LoadContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const LoadCodepad = styled.div`
  width: 190px;
  height: 190px;
  margin: auto;
  color: rgb(25, 118, 210);
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgb(25, 118, 210);
  transform: rotate(45deg);

  &,
  ::before,
  ::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  ::before,
  ::after {
    content: "";
    z-index: -1;
    margin: -5%;
    box-shadow: inset 0 0 0 2px;
    border-radius: 6px;
    ${LoadIn()}
  }

  ::before {
    animation-delay: -2s;
  }
`;

export const LoadText = styled.h1`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: rotate(-45deg);
  margin: auto;
  width: inherit;
  height: max-content;
  text-align: center;
  font-size: var(--font26);
  line-height: var(--font26);
  font-weight: 500;
  font-family: var(--fontFamily);
  cursor: default;
`;

export const LoadIcon = styled.span`
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
  position: relative;
`;
