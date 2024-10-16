import { useRef, useState, useContext } from "react";
import { ITeam } from "../../interfaces/ITeam";
import { TeamContext } from "../../contexts/TeamContext";
import TeamItem from "./TeamItem";

//Search by manufacturer name
const SearchTeam = () => {
  const [team, setTeam] = useState<ITeam | null>(null);
  const teamElement = useRef<HTMLInputElement>(null);

  const teamContext = useContext(TeamContext);

  const getTeamByManufacturerName = () => {
    if (teamElement.current) {
      const teamName = teamElement.current.value;
      const chosenTeam =
        teamContext?.searchByManufacturerName(teamName) || null;
      setTeam(chosenTeam);
    }
  };

  return (
    <section>
      <div className="d-flex flex-column align-items-end mb-3">
        <h6 className="mt-5">Search by car type</h6>
        <input
          ref={teamElement}
          type="text"
          placeholder="write.."
          className="form-control  mb-2"
          style={{ width: "200px" }}
        />

        <button className="btn btn-dark" onClick={getTeamByManufacturerName}>
          Search
        </button>
      </div>
      {team ? (
        <TeamItem
          id={team.id}
          manufacturer={team.manufacturer}
          driver1={team.driver1}
          driver2={team.driver2}
          image={team.image}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default SearchTeam;
