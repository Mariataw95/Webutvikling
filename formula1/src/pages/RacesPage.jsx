import RaceItem from "../components/races/RaceItem";
import RaceList from "../components/races/RaceList";
import RaceService from "../services/RaceService";
import { RaceContext, RacesProvider } from "../contexts/RaceContext";

const RacesPage = () => {
  return (
    <RacesProvider>
      <RaceList></RaceList>
    </RacesProvider>
  );
};

export default RacesPage;
