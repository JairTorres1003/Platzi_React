import React from "react";
import { ImgWrapper, Img, Article, BoxSkeleton } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Skeleton } from "@mui/material";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({
  id,
  likes = 0,
  src = DEFAULT_IMAGE,
  loading = false,
}) => {
  const [showCard, refCard] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  if (loading) {
    return (
      <Article ref={refCard}>
        <Skeleton
          variant="rounded"
          width="100%"
          height={230}
          animation="wave"
        />
        <BoxSkeleton>
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            animation="wave"
          />
          <Skeleton variant="rounded" width={50} height={14} animation="wave" />
        </BoxSkeleton>
      </Article>
    );
  }

  return (
    <Article ref={refCard}>
      {showCard && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {({ likePhoto }) => {
              const handleFavClick = () => {
                !liked &&
                  likePhoto({
                    variables: {
                      input: { id },
                    },
                  });
                setLiked(!liked);
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </React.Fragment>
      )}
    </Article>
  );
};
