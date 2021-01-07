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

  return (
    <div>
      {console.log(events)}
      {events
        ? events.map((event) => {
            return (
              <>
                <Event
                  name={event.name}
                  img={event.image}
                  url={event.url}
                  date={event.date}
                />
              </>
            );
          })
        : null}
    </div>
  );
};

export default Interested;
