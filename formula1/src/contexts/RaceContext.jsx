import { createContext, useState, useEffect } from "react";
import RaceService from "../services/RaceService";

export const RaceContext = createContext(null);

export const RacesProvider = ({ children }) => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getRacesFromService();
    }, 2000);
  }, []);

  // Get all drivers
  const getRacesFromService = async () => {
    const racesFromService = await RaceService();
    setRaces(racesFromService);
  };

  return (
    <RaceContext.Provider value={{ races }}>{children}</RaceContext.Provider>
  );
};
