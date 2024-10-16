import DriverList from "../components/drivers/DriverList";
import AddDrivers from "../components/drivers/AddDrivers";
import DeleteDriver from "../components/drivers/DeleteDriver";
import EditDrivers from "../components/drivers/EditDrivers";
import SearchDrivers from "../components/drivers/SearchDrivers";
import { DriversProvider } from "../contexts/DriverContext";
import DeleteDrivers from "../components/drivers/DeleteDriver";

const DriversPage = () => {
  return (
    <>
      <DriversProvider>
        <SearchDrivers></SearchDrivers>
        <DriverList />
      </DriversProvider>
    </>
  );
};

export default DriversPage;
