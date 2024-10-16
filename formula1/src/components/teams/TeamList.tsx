import { useContext } from "react";
import { TeamContext } from "../../contexts/TeamContext";
import TeamItem from "./TeamItem";
import { ITeamContext } from "../../interfaces/ITeamContext";

const TeamList = () => {
  const { teams } = useContext(TeamContext) as ITeamContext;

  const getTeamsJSX = () => {
    const teamsJSX = teams.map((team, i) => (
      <TeamItem
        key={i}
        manufacturer={team.manufacturer}
        driver1={team.driver1}
        driver2={team.driver2}
        image={team.image}
        id={team.id}
      />
    ));
    return teamsJSX;
  };

  return (
    <section>
      <div className="row g-3">{getTeamsJSX()}</div>
    </section>
  );
};

export default TeamList;
