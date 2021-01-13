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
    <div className="interested">
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
                    name={event.name}
                    img={event.image}
                    url={event.url}
                    date={event.date}
                    expired={check(event.date)}
                  />
                  <a className="buy" target="_blank" href={event.url}>
                    Buy Tickets
                  </a>
                </div>
              );
            })
          : ex.map((event) => {
              return (
                <div className="expired">
                  <Event
                    name={event.name}
                    img={event.image}
                    url={event.url}
                    date={event.date}
                    expired={check(event.date)}
                  />
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
