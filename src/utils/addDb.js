import { db } from "../firebase";

const addDB = (name, url, image, date) => {
  db.collection("events").add({
    name,
    url,
    image,
    date,
  });
};

export default addDB;
