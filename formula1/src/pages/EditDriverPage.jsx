import DeleteDrivers from "../components/drivers/DeleteDriver";
import EditDrivers from "../components/drivers/EditDrivers";
import { DriversProvider } from "../contexts/DriverContext";
import React from "react";

const EditDriverPage = () => {
  return (
    <>
      <DriversProvider>
        <EditDrivers />
        <DeleteDrivers />
      </DriversProvider>
    </>
  );
};

export default EditDriverPage;
