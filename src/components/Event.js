import React from "react";

const Event = (props) => {
  return (
    <div>
      <h4> {props.name}</h4>
      <h5> {props.date} </h5>
      <img src={props.img} />
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
