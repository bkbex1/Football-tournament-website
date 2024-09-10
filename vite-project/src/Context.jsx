import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const formatEuropeanDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const DataProvider = ({ children }) => {
  const [teames, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [records, setRecords] = useState([]);
  const [matches, setMatches] = useState([]);
  const [groups, setGroups] = useState([]);
  const [finals, setFinals] = useState([]);
  const groupsArray = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
  };
  function findMatchByID(id) {
    return matches.find((match)=> match.ID===id)
  }
  const finalsArray = {
    RoundOf8: [],
    QuarterFinals: [],
    SemiFinals: [],
    Final: [],
  };

  useEffect(() => {
    const loadMatches = async () => {
      const teamesRes = await fetch("/files/teams.csv");
      const teamesText = await teamesRes.text();
      const teames = parseCSV(teamesText);
      setTeams(teames);

      const playesRes = await fetch("/files/players.csv");
      const playersText = await playesRes.text();
      const players = parseCSV(playersText);
      setPlayers(players);

      const recordsRes = await fetch("/files/records.csv");
      const recordsText = await recordsRes.text();
      const records = parseCSV(recordsText);
      setRecords(records);

      const matchesRes = await fetch("/files/matches.csv");
      const matchesText = await matchesRes.text();
      const matches = parseCSV(matchesText);
      setMatches(matches);

      const cutoffDate = new Date("2024-06-26");

      let elimination = matches.filter((match) => {
        const matchDate = new Date(match.Date);
        let result = matchDate <= cutoffDate;
        return result;
      });

      let restMatches = matches.filter((match) => {
        const matchDate = new Date(match.Date);
        let result = matchDate > cutoffDate;
        return result;
      });

      for (let i = 0; i < elimination.length; i++) {
        let team = teames.find(
          (teamFind) => teamFind.ID === elimination[i].ATeamID
        );
        let group = team.Group;
        switch (group) {
          case "A":
            groupsArray.A.push(elimination[i]);
            break;
          case "B":
            groupsArray.B.push(elimination[i]);
            break;
          case "C":
            groupsArray.C.push(elimination[i]);
            break;
          case "D":
            groupsArray.D.push(elimination[i]);
            break;
          case "E":
            groupsArray.E.push(elimination[i]);
            break;
          case "F":
            groupsArray.F.push(elimination[i]);
            break;
        }
      }
      let length = Math.ceil(restMatches.length / 2);

      Object.entries(finalsArray).forEach(([name, array]) => {
        for (let i = 0; i < length; i++) {
          array.push(restMatches.shift());
        }
        length = length - Math.ceil(length / 2);
      });
      setFinals(finalsArray);
      setGroups(groupsArray);
    };

    loadMatches();
  }, []);

  function findTeamName(TeamID) {
    return teames.find((team) => team.ID === TeamID);
  }
  function findAllTeamPlayers(TeamID) {
    return players.filter((player) => player.TeamID === TeamID);
  }
  const parseCSV = (text) => {
    const rows = text.split("\n");
    const headers = rows[0].split(",").map((header) => header.trim());

    return rows.slice(1).map((row) => {
      const values = row.split(",");
      const rowObject = {};

      headers.forEach((header, index) => {
        let value = values[index] !== undefined ? values[index].trim() : "";
        rowObject[header] = value;
      });
      return rowObject;
    });
  };

  return (
    <DataContext.Provider
      value={{
        teames,
        players,
        records,
        matches,
        groups,
        finals,
        findTeamName,
        findMatchByID,
        findAllTeamPlayers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
