import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { useParams } from "react-router-dom";

export const Home = () => {
  const params = useParams();

  return (
    <React.Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </React.Fragment>
  );
};
