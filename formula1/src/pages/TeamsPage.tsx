import SearchTeam from "../components/teams/SearchTeam";
import TeamList from "../components/teams/TeamList";
import { TeamProvider } from "../contexts/TeamContext";

const TeamsPage = () => {
  return (
    <TeamProvider>
      <section>
        <SearchTeam></SearchTeam>
        <TeamList></TeamList>;
      </section>
    </TeamProvider>
  );
};

export default TeamsPage;
