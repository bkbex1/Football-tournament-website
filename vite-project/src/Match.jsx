import TeamCard from "./TeamCard";
import { DataContext } from './Context'
import { useContext } from "react";

export default function Match({match}){
    const {findTeamName} = useContext(DataContext)

    const ATeam = findTeamName(match.ATeamID);
    const BTeam = findTeamName(match.BTeamID);

    const results = match.Score.split("-")

    if(results[0]>results[1]){
        ATeam.winner = true;
        BTeam.winner = false;

    }else if(results[0]<results[1]){
        BTeam.winner = true;
        ATeam.winner = false;
    }else{
        ATeam.winner = false;
        BTeam.winner = false;
    }


    return (
        <div className="matchCard">
            {ATeam && <TeamCard team={ATeam}></TeamCard>}
            <div> 
                <h3>Result</h3>
                <h4>{results[0]} : {results[1]}</h4>

                <h5>{match.Date}</h5>
            </div>
            {BTeam && <TeamCard team={BTeam}></TeamCard>}
        </div>
    )
}