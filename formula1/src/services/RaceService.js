import axios from "axios";

const RaceService = (() => {
  const RacesController = "http://localhost:5167/races";

  //Get all races
  const getAllRaces = async () => {
    try {
      const result = await axios.get(RacesController);
      return result.data;
    } catch (err) {
      console.log("Fail. No contact with controller");
      return [];
    }
  };

  return getAllRaces;
})();
export default RaceService;
