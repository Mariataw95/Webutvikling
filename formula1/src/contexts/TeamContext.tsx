import { FC, ReactNode, useState, createContext } from "react";
import { ITeam } from "../interfaces/ITeam";
import { useEffect } from "react";
import axios from "axios";
import { ITeamContext } from "../interfaces/ITeamContext";

export const TeamContext = createContext<ITeamContext | null>(null);

interface Props {
  children: ReactNode;
}

export const TeamProvider: FC<Props> = ({ children }) => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  // Get all teams
  useEffect(() => {
    const GetAllTeams = async () => {
      try {
        const result = await axios.get("http://localhost:5167/teams");
        setTeams(result.data);
      } catch (error) {
        console.error("something went wrong..", error);
      }
    };

    GetAllTeams();
  }, []);

  // Search by manufacturer name
  const searchByManufacturerName = (manufacturer: string): ITeam | null => {
    const chosenTeam = teams.find(
      (team) => team.manufacturer.toLowerCase() === manufacturer.toLowerCase()
    );
    return chosenTeam || null;
  };

  return (
    <>
      <TeamContext.Provider value={{ teams, searchByManufacturerName }}>
        {children}
      </TeamContext.Provider>
    </>
  );
};

export default TeamContext;
