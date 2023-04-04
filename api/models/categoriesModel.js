import { db } from "../adapter.js";

function list() {
  return db.data.categories;
}

export default { list };
