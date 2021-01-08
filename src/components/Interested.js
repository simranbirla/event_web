import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Event from "./Event";

const Interested = () => {
  const [events, setEvents] = useState("going");
  const [ex, setEx] = useState([]);
  const [going, setGoing] = useState([]);

  const check = (date) => {
    var today = new Date();
    var parts = date.split("-");
    var e_date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (e_date.getTime() > today.getTime()) {
      return 1;
    } else {
      return 2;
    }
  };

  useEffect(() => {
    db.collection("events").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        var date = doc.data().date;
        console.log(date);
        console.log(check(date));
        if (check(date) === 2) {
          setEx([...ex, doc.data()]);
        } else {
          setGoing([...going, doc.data()]);
        }
      });
    });
    return;
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setEvents("going")}>Going</button>
        <button onClick={() => setEvents("expired")}>Expired</button>
      </div>
      {events === "going"
        ? going.map((event) => {
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
        : ex.map((event) => {
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
          })}
    </div>
  );
};

export default Interested;
