import React, { useState, useEffect } from "react";
import HomeComponent from "./HomeComponent";

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
    <div>
      HOME
      <h2>Attractions</h2>
      {attract
        ? attract.map((att) => {
            return <HomeComponent name={att.name} img={att.images} />;
          })
        : null}
      <div>
        <h2>Events</h2>
        {events
          ? events.map((att) => {
              return <HomeComponent name={att.name} img={att.images} />;
            })
          : null}
      </div>
      <div>
        <h2>Products</h2>
        {products
          ? products.map((att) => {
              return <HomeComponent name={att.name} img={att.images} />;
            })
          : null}
      </div>
      <div>
        <h2>Venues</h2>
        {venues
          ? venues.map((att) => {
              return <HomeComponent name={att.name} img={att.images} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
