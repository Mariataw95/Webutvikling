import AddDrivers from "../components/drivers/AddDrivers";
import { DriversProvider } from "../contexts/DriverContext";

const AddDriverPage = () => {
  return (
    <DriversProvider>
      <AddDrivers></AddDrivers>
    </DriversProvider>
  );
};

export default AddDriverPage;
