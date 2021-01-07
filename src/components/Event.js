import React from "react";
import addDB from "../utils/addDb";

const Event = (props) => {
  return (
    <div>
      <h4> {props.name}</h4>
      <h5> {props.date} </h5>
      <img src={props.img} />
      <button
        onClick={() => addDB(props.name, props.img, props.url, props.date)}
      >
        Interested
      </button>
    </div>
  );
};

export default Event;
