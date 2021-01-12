import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Event from "./Event";
import "../Style/Other.css";
const OtherComponents = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/${props.match.params.id}.jsont?page=${page}&size=30&apikey=3bg2PeznfzraJm2XcnNnPYKsOKAIdAS0`
    )
      .then((res) => res.json())
      .then((data) => {
        setData([...data._embedded[props.match.params.id]]);
      });
    return;
  }, [page]);

  return (
    <div className="other">
      <div className="other_element">
        {data
          ? data.map((e) => {
              if (e.images) {
                return (
                  <>
                    <Event
                      key={e.id}
                      name={e.name}
                      img={e.images[0].url}
                      url={e.url}
                    />
                  </>
                );
              }
            })
          : null}
      </div>
      <button onClick={() => setPage(page + 1)}> More >>> </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user.user };
};

export default connect(mapStateToProps)(OtherComponents);
