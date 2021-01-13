import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Event from "./Event";
import { connect } from "react-redux";
import "../Style/Interest.css";

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
        if (check(date) === 2) {
          setEx([...ex, { data: doc.data(), id: doc.id }]);
        } else {
          setGoing([...going, { data: doc.data(), id: doc.id }]);
        }
      });
    });
    return () => {
      setEx();
      setGoing();
    };
  }, []);

  const deleteEvent = (id) => {
    db.doc(`events/${props.user.uid}/event/${id}`)
      .delete()
      .then(() => {
        alert("Event deleted!!");
      });
  };

  return (
    <div className="interested">
      {console.log(going)}
      <div className="buttons">
        <button onClick={() => setEvents("going")}>Going</button>
        <button className="ex" onClick={() => setEvents("expired")}>
          Expired
        </button>
      </div>
      <div className="interested_event">
        {events === "going"
          ? going.map((event) => {
              return (
                <div className="going_event">
                  <Event
                    name={event.data.name}
                    img={event.data.image}
                    url={event.data.url}
                    date={event.data.date}
                    expired={check(event.data.date)}
                  />
                  <a className="buy" target="_blank" href={event.url}>
                    Buy Tickets
                  </a>
                  <button
                    className="delete"
                    onClick={() => deleteEvent(event.id)}
                  >
                    X
                  </button>
                </div>
              );
            })
          : ex.map((event) => {
              return (
                <div className="expired">
                  <Event
                    name={event.data.name}
                    img={event.data.image}
                    url={event.data.url}
                    date={event.data.date}
                    expired={check(event.data.date)}
                  />

                  <button
                    className="delete"
                    onClick={() => deleteEvent(event.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user.user };
};

export default connect(mapStateToProps)(Interested);
