import React from "react";
import { Image, ImageGradient, DivSkeleton, Link } from "./styles";
import { Skeleton } from "@mui/material";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  name = "",
  loading = false,
}) => {
  if (loading) {
    return (
      <DivSkeleton>
        <Skeleton variant="circular" width={60} height={60} animation="wave" />
        <Skeleton variant="circular" width={60} height={15} animation="wave" />
      </DivSkeleton>
    );
  }

  return (
    <Link to={path}>
      <ImageGradient>
        <Image src={cover} />
      </ImageGradient>
      {name}
    </Link>
  );
};
