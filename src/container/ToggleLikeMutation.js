import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => {
  const [likePhoto] = useMutation(LIKE_PHOTO);
  return children({ likePhoto });
};
