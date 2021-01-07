import React from "react";

const Event = (props) => {
  return (
    <div>
      <h4> {props.name}</h4>
      <h5> {props.date} </h5>
      <img src={props.img} />
    </div>
  );
};

export default Event;
