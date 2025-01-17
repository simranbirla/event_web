import React from "react";
import "../Style/Event.css";

const Event = (props) => {
  return (
    <div
      className={
        props.expired && props.expired === 2 ? "event expired" : "event"
      }
    >
      <h4> {props.name}</h4>
      <h5> {props.date} </h5>
      <img src={props.img} alt={props.name} />
      {props.expired ? (
        props.expired === 1 ? (
          <p>Going on</p>
        ) : (
          <p>Expired</p>
        )
      ) : null}
      <a href={props.url} target="_blank">
        Details
      </a>
    </div>
  );
};

export default Event;
