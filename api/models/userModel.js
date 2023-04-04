import { db } from "../adapter.js";
import crypto from "crypto";
import { v1 } from "uuid";
import bcrypt from "bcrypt";

function addFav({ id, photoId }) {
  db.data.users
    .find((user) => user.id === id)
    .update("favs", (favs) => [...favs, photoId])
    .write();
}

function removeFav({ id, photoId }) {
  db.data.users
    .find((user) => user.id === id)
    .update("favs", (favs) => favs.filter((fav) => fav !== photoId))
    .write();
}

function hasFav({ id, photoId }) {
  const user = db.data.users.find((user) => user.id === id);
  const hasFav = user.favs.includes(photoId);
  return hasFav;
}

async function create({ email, password }) {
  const avatarHash = crypto.createHash("md5").update(email).digest("hex");
  const avatar = `https://gravatar.com/avatar/${avatarHash}`;

  // Create a user
  const user = {
    id: v1(), // with a unique user id
    password: await bcrypt.hash(password, 10), // with the encrypted password
    favs: [],
    avatar,
    email,
  };

  // Write in db.json
  db.data.users.push(user).write();

  return user;
}

function find({ email }) {
  return db.data.users.find((user) => user.email === email);
}

export default { create, addFav, hasFav, removeFav, find };
