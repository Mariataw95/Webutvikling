import { useState, useEffect } from "react";
import DriverItem from "./DriverItem";
import DriverService from "../../services/DriverService";

// Searching for drivers by id
const SearchDrivers = () => {
  const [id, setId] = useState("");
  const [driver, setDriver] = useState(null);

  const getDriverFromService = async () => {
    const driverFromService = await DriverService.getById(id);
    setDriver(driverFromService);
  };

  const getDriverJSX = () => {
    return (
      <DriverItem
        id={driver.id}
        name={driver.name}
        nationality={driver.nationality}
        age={driver.age}
        image={driver.image}
      ></DriverItem>
    );
  };

  const handleChange = (e) => {
    const idInput = e.currentTarget.value;
    setId(idInput);
  };

  return (
    <section>
      <div className="d-flex flex-column align-items-end mb-3">
        <h6 className="mt-5">Search for driver by id</h6>
        <input
          onChange={handleChange}
          placeholder="search by id.."
          className="form-control  mb-2"
          type="text"
          style={{ width: "200px" }}
        />
        <button className="btn btn-dark" onClick={getDriverFromService}>
          Search
        </button>
      </div>

      <section className="row">{driver != null ? getDriverJSX() : ""}</section>
    </section>
  );
};

export default SearchDrivers;
