import { createContext, useState, useEffect } from "react";
import DriverService from "../services/DriverService";

export const DriverContext = createContext(null);

export const DriversProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getDriversFromService();
    }, 2000);
  }, []);

  // Get all drivers
  const getDriversFromService = async () => {
    const driversFromService = await DriverService.getAll();
    setDrivers(driversFromService);
  };

  // Get driver by id in order to show the correct driver
  const getById = async (id) => {
    const driversToUpdate = await DriverService.getById(id);
    return driversToUpdate;
  };

  // Edit driver
  const editDrivers = (driversToUpdate) => {
    DriverService.putDrivers(driversToUpdate);
    setTimeout(() => {
      getDriversFromService();
    }, 1000);
  };

  // Delete driver
  const deleteDrivers = async (id) => {
    const result = await DriverService.deleteDrivers(id);
    return result;
  };

  return (
    <DriverContext.Provider
      value={{ drivers, getById, editDrivers, deleteDrivers }}
    >
      {children}
    </DriverContext.Provider>
  );
};
