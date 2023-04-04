import React, { useState } from "react";
import { IconButton, Nav } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { BsHeartFill, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isActive, setIsActive] = useState("/");

  const handleActive = (val) => setIsActive(val);

  return (
    <Nav>
      <IconButton
        component={Link}
        to="/"
        onClick={() => handleActive("/")}
        className={isActive === "/" ? "active" : ""}
      >
        <AiFillHome />
      </IconButton>
      <IconButton
        component={Link}
        to="/favs"
        onClick={() => handleActive("/favs")}
        className={isActive === "/favs" ? "active" : ""}
      >
        <BsHeartFill size="20px" style={{ marginTop: "2px" }} />
      </IconButton>
      <IconButton
        component={Link}
        to="/me"
        onClick={() => handleActive("/me")}
        className={isActive === "/me" ? "active" : ""}
      >
        <BsPersonFill />
      </IconButton>
    </Nav>
  );
};
