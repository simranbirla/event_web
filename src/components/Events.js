import React, { useState, useEffect } from "react";
import addDB from "../utils/addDb";
import { connect } from "react-redux";

import Event from "./Event";
const Events = (props) => {
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
              <>
                <Event
                  key={e.id}
                  name={e.name}
                  img={e.images[1].url}
                  url={e.url}
                  date={e.dates.start.localDate}
                  img={e.images[1].url}
                />
                <button
                  onClick={() =>
                    addDB(
                      e.name,
                      e.url,
                      e.images[1].url,
                      e.dates.start.localDate,
                      props.user.uid
                    )
                  }
                >
                  Interested
                </button>
              </>
            );
          })
        : null}
      <button onClick={() => setPage(page + 1)}>More</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { user: state.auth.user.user };
};

export default connect(mapStateToProps)(Events);
