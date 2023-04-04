import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState(new Array(7));
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    window
      .fetch(window.SERVER_URL + "/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();

  return (
    <List>
      {categories.map((category, index) => (
        <Item key={index}>
          <Category
            {...category}
            loading={loading}
            path={`/pet/${category.id}`}
          />
        </Item>
      ))}
    </List>
  );
};
