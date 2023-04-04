import { db } from "../adapter.js";

function find({ id, favs = [] }) {
  const photo = db.data.photos.find((photo) => photo.id === +id);
  return {
    ...photo,
    liked: favs.includes(id.toString()),
  };
}

function addLike({ id }) {
  const photo = db.data.photos.find((photo) => photo.id === +id);
  photo.likes += 1;
  return db.write();
}

function removeLike({ id }) {
  const photo = db.data.photos.find((photo) => photo.id === +id);
  photo.likes -= 1;
  return db.write();
}

function list({ categoryId, ids, favs = [] }) {
  let photos;
  if (categoryId && categoryId !== "all") {
    photos = db.data.photos.filter((photo) => photo.categoryId === +categoryId);
  } else if (ids) {
    photos = db.data.photos.filter((photo) =>
      ids.includes(photo.id.toString())
    );
  } else {
    photos = db.data.photos;
  }

  return photos.map((photo) => ({
    ...photo,
    liked: favs.includes(photo.id.toString()),
  }));
}

export default { find, addLike, removeLike, list };
