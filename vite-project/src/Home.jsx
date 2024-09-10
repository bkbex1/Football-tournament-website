import { useState, useContext } from "react";
import { Link  } from "react-router-dom";
import { DataContext } from "./Context";
import Match from "./Match";

export default function Home() {
  const { teames, matches, players, records, groups, finals } =
    useContext(DataContext);
  return (
    <>
      <div className="group">
        {Object.entries(groups).map(([groupeName, matches]) => (
          <div key={groupeName} className="groupCard" >
            <h3>Group name: {groupeName}</h3>
            {matches &&
              matches.map((match) => {
                return (
                  <Link to={"info/"+match.ID}>
                    <Match match={match}></Match>
                  </Link>
                );
              })}
          </div>
        ))}
      </div>
      <hr />
      <div className="group">
        {Object.entries(finals).map(([groupeName, matches]) => (
          <div className="groupCard">
            <h3>{groupeName}</h3>
            {matches &&
              matches.map((match) => {
                return (
                  <Link to={"info/"+match.ID}>
                    <Match match={match}></Match>
                  </Link>
                );
              })}
          </div>
        ))}
      </div>
    </>
  );
}
