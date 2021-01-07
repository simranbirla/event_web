import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Event from "./Event";

const Interested = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    db.collection("events").onSnapshot((snapshot) => {
      setEvents(snapshot.docs.map((doc) => doc.data()));
    });
    return;
  }, []);

  const check = (date) => {
    var today = new Date();
    var parts = date.split("-");
    var e_date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (e_date.getTime() > today.getTime()) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div>
      {events
        ? events.map((event) => {
            return (
              <>
                <Event
                  name={event.name}
                  img={event.image}
                  url={event.url}
                  date={event.date}
                  expired={check(event.date)}
                />
              </>
            );
          })
        : null}
    </div>
  );
};

export default Interested;
