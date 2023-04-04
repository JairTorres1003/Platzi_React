import React from "react";
import { Header } from "./styles";
import { Logo } from "../Logo";
import { Divider } from "@mui/material";

export const HeaderBar = () => {
  return (
    <Header>
      <Logo />
      <Divider sx={{ width: "100%", marginTop: "5px" }} />
    </Header>
  );
};
