export default function TeamMembers({ players }) {
  return (
    <table>
      <tr>
        <th>№</th>
        <th>Player</th>
        <th>Pos</th>
      </tr>

      {players.map((player) => {
        return (
          <tr>
            <td>{player.TeamNumber}</td>
            <td>{player.FullName}</td>
            <td>{player.Position}</td>
          </tr>
        );
      })}
    </table>
  );
}
