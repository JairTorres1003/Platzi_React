import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { DivButton } from "./styles";
import { IconButton } from "@mui/material";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? FcLike : FcLikePlaceholder;

  return (
    <DivButton>
      <IconButton onClick={onClick} size="small">
        <Icon size="24px" />
      </IconButton>
      {`${likes} Me gusta${likes > 1 ? "s" : ""}`}
    </DivButton>
  );
};
