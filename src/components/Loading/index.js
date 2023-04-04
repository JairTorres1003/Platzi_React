import React from "react";
import { LoadCodepad, LoadContainer, LoadIcon, LoadText } from "./styles";

export const Loading = ({ text = "" }) => {
  return (
    <LoadContainer>
      <LoadCodepad>
        <LoadIcon className="loading__codepad__logo"></LoadIcon>
        <LoadText>{text !== "" ? text : "Cargando"}</LoadText>
      </LoadCodepad>
    </LoadContainer>
  );
};
