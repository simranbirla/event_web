import React, { useState, useEffect } from "react";

import Event from "./Event";
const Events = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.jsont?page=${page}&size=50&apikey=3bg2PeznfzraJm2XcnNnPYKsOKAIdAS0`
    )
      .then((res) => res.json())
      .then((data) => {
        setData([...data._embedded.events]);
      });
    return;
  }, [page]);

  return (
    <div>
      {data
        ? data.map((e) => {
            return (
              <Event
                key={e.id}
                name={e.name}
                img={e.images[1].url}
                url={e.url}
                date={e.dates.start.localDate}
                img={e.images[1].url}
              />
            );
          })
        : null}
      <button onClick={() => setPage(page + 1)}>More</button>
    </div>
  );
};

export default Events;
