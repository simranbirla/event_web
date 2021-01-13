import React, { useState, useEffect } from "react";
import HomeComponent from "./HomeComponent";
import { Link } from "react-router-dom";
import "../Style/Home.css";
const Home = () => {
  const [attract, setAttract] = useState([]);
  const [events, setEvents] = useState([]);
  const [products, setProducts] = useState([]);
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/suggest?apikey=3bg2PeznfzraJm2XcnNnPYKsOKAIdAS0"
    )
      .then((res) => res.json())
      .then((data) => {
        setAttract([...data._embedded.attractions]);
        setEvents([...data._embedded.events]);
        setProducts([...data._embedded.products]);
        setVenues([...data._embedded.venues]);
      });
    return;
  }, []);

  return (
    <div className="home">
      <div className="home_element">
        <Link className="more" to="/attractions">
          <h2>Attractions</h2>
        </Link>{" "}
        <div className="home_component">
          {attract
            ? attract.map((att) => {
                return (
                  <HomeComponent
                    name={att.name}
                    img={att.images}
                    url={att.url}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="home_element">
        <Link className="more" to="/find/events">
          <h2>Events</h2>
        </Link>{" "}
        <div className="home_component">
          {events
            ? events.map((att) => {
                return (
                  <HomeComponent
                    name={att.name}
                    img={att.images}
                    url={att.url}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="home_element">
        <Link className="more" to="/products">
          <h2>Products</h2>
        </Link>{" "}
        <div className="home_component">
          {products
            ? products.map((att) => {
                return (
                  <HomeComponent
                    name={att.name}
                    img={att.images}
                    url={att.url}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="home_element">
        <Link className="more" to="/venues">
          <h2>Venues</h2>
        </Link>{" "}
        <div className="home_component">
          {venues
            ? venues.map((att) => {
                return (
                  <HomeComponent
                    name={att.name}
                    img={att.images}
                    url={att.url}
                  />
                );
              })
            : null}
        </div>
        M{" "}
      </div>
    </div>
  );
};

export default Home;
