export default function TeamCard({team}){
    return <div className="teamCard">
    <h3>{team.Name}</h3>
    { team.winner ? <div className="win">WIN</div> : <></>}
    <h5>{team.ManagerFullName}</h5>
    </div>
}