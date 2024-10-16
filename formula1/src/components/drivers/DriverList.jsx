import { useEffect, useState } from "react";
import DriverService from "../../services/DriverService";
import DriverItem from "./DriverItem";

// Printing out drivers
const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const driversFromService = await DriverService.getAll();
    setDrivers(driversFromService);
  };

  const getDriversJSX = () => {
    const driversJSX = drivers.map((driver, i) => (
      <DriverItem
        key={i}
        id={driver.id}
        name={driver.name}
        age={driver.age}
        image={driver.image}
        nationality={driver.nationality}
      ></DriverItem>
    ));
    return driversJSX;
  };

  return (
    <section>
      <h1 className="text-center mb-5">F1 Drivers 2023</h1>
      <section className="row g-3">{getDriversJSX()}</section>
    </section>
  );
};

export default DriverList;
