import React from "react";
import "../Style/Home.css";

const HomeComponent = (props) => {
  return (
    <div className="home_container">
      <h5>{props.name}</h5>
      {props.img && props.img[1] ? (
        <a href={props.url} alt={props.name} target="_blank">
          {" "}
          <img src={props.img[1].url} />
        </a>
      ) : null}
    </div>
  );
};

export default HomeComponent;
