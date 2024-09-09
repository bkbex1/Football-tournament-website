import { useState, useContext } from "react";
import { DataContext } from "./Context";
import Match from "./Match";
import "./App.css";

function App() {
  const { teames, matches, players, records, groups, finals } = useContext(DataContext);
  console.log(groups);

  return (
    <>
      <div className="group">
        {Object.entries(groups).map(([groupeName, matches]) => (
          <div className="groupCard" key={groupeName}>
            <h3>Group name: {groupeName}</h3>
            {matches && matches.map(match=>{
              return <Match match={match}></Match>
            }) }
          </div>
        ))}
      </div>
      <hr/>
      <div className="group">
        {Object.entries(finals).map(([groupeName, matches])=>(
          <div className="groupCard">
            <h3>{groupeName}</h3>
            {matches && matches.map(match=>{
              return <Match match={match}></Match>
            }) }
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
