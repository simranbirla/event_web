import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Event from "./Event";
import { connect } from "react-redux";

const Interested = (props) => {
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
    db.collection(`events/${props.user.uid}/event`).onSnapshot((snapshot) => {
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
      {console.log(going)}
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
                <a href={event.url}>Buy Tickets</a>
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

const mapStateToProps = (state) => {
  console.log(state);
  return { user: state.auth.user.user };
};

export default connect(mapStateToProps)(Interested);
