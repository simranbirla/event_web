import React from "react";

const HomeComponent = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      {props.img ? (
        <img src={props.img[1].url} width="400px" height="400px" />
      ) : null}
    </div>
  );
};

export default HomeComponent;
