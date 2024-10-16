import DriverService from "../services/DriverService";
import AddDrivers from "../components/drivers/AddDrivers";
import DeleteDriver from "../components/drivers/DeleteDriver";
import EditDrivers from "../components/drivers/EditDrivers";
import { DriversProvider } from "../contexts/DriverContext";

const RegisterPage = () => {
  return (
    <>
      <DriversProvider>
        <EditDrivers></EditDrivers>
        <DeleteDriver></DeleteDriver>;<AddDrivers></AddDrivers>
      </DriversProvider>
    </>
  );
};

export default RegisterPage;
