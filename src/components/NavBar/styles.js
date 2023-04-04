import styled from "styled-components";
import { IconButton as IconBtn } from "@mui/material";
import { fadeIn } from "../../styles/animations";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  width: 100%;
  height: 50px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  ::before {
    content: "";
    position: absolute;
    top: -4px;
    background: linear-gradient(0deg, rgb(0 0 0 / 40%), transparent);
    height: 4px;
    width: 100%;
  }
`;

export const IconButton = styled(IconBtn)`
  & > svg {
    color: rgb(0 0 0 / 30%);
  }
  &.active > svg {
    color: #000;
  }
  &.active::after {
    content: ".";
    position: absolute;
    bottom: -4px;
    font-size: 26px;
    font-weight: bold;
    color: #000;
    ${fadeIn({ time: ".2s" })}
  }
`;
