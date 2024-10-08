import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Context";
import TeamMembers from "./TeamMembers";
import Match from "./Match";

export default function MatchInfo() {
  let { id } = useParams();
  const { teames, findAllTeamPlayers, players, findTeamName, findMatchByID } =
    useContext(DataContext);
  let matchInfo = findMatchByID(id);
  let ATeam = findTeamName(matchInfo.ATeamID);
  let BTeam = findTeamName(matchInfo.BTeamID);
  let teamAPlayers = findAllTeamPlayers(ATeam.ID);
  let teamBPlayers = findAllTeamPlayers(BTeam.ID);

  return (<>
    <Match match={matchInfo}></Match>
    <div className="matchInfo">
      <div className="teamHalf">
        <h2>{ATeam.Name}</h2>
        <div className="matchInfo">
          <div>
            <img src="https://i.pinimg.com/564x/67/86/29/67862923ea5e88b429156ec0fa187b5d.jpg"></img>
          </div>
          <div className="table">
            {teamAPlayers && <TeamMembers players={teamAPlayers}></TeamMembers>}
          </div>
        </div>
      </div>
      <div className="teamHalf">
        <h2>{BTeam.Name}</h2>
        <div className="matchInfo">
          <div>
            <img src="https://i.pinimg.com/564x/67/86/29/67862923ea5e88b429156ec0fa187b5d.jpg"></img>
          </div>
          <div className="table">
            {teamBPlayers && <TeamMembers players={teamBPlayers}></TeamMembers>}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
