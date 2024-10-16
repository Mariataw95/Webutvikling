import { useEffect, useState } from "react";
import RaceService from "../../services/RaceService";
import RaceItem from "./RaceItem";

// Printing out races baed on item component
const RaceList = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    getRacesFromService();
  }, []);

  const getRacesFromService = async () => {
    try {
      const racesFromService = await RaceService();
      setRaces(racesFromService);
    } catch (error) {
      console.error("Fail", error);
    }
  };

  const getRacesJSX = () => {
    const racesJSX = races.map((race, i) => (
      <RaceItem
        key={i}
        id={race.id}
        winnerName={race.winnerName}
        winnerTime={race.winnerTime}
        grandPrix={race.grandPrix}
        numberOfLaps={race.numberOfLaps}
      ></RaceItem>
    ));
    return racesJSX;
  };

  return (
    <section>
      <h1 className="text-danger mt-5 text-center">
        FORMULA 1 - RACE RESULT 2023
      </h1>
      <p></p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="bg-light">ID</th>
              <th className="bg-light">Winner</th>
              <th className="bg-light">Time</th>
              <th className="bg-light">Grand Prix</th>
              <th className="bg-light">Laps</th>
            </tr>
          </thead>
          <tbody>
            {races.map((race, index) => (
              <tr key={index}>
                <td className="bg-light">{race.id}</td>
                <td>{race.winnerName}</td>
                <td className="bg-light">{race.winnerTime}</td>
                <td>{race.grandPrix}</td>
                <td className="bg-light">{race.numberOfLaps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RaceList;
