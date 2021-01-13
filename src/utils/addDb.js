import { db } from "../firebase";

const addDB = (name, url, image, date, userId) => {
  db.collection(`events/${userId}/event`).add({
    name,
    url,
    image,
    date,
  });
  alert("Added the Event");
};

export default addDB;
