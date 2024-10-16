import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

// Editing drivers by getting them first by id
const EditDrivers = () => {
  const { getById, editDrivers } = useContext(DriverContext);
  const [id, setId] = useState("");
  const [driversToUpdate, setDriversToUpdate] = useState({
    name: "...",
  });
  const [editStatus, setEditStatus] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setDriversToUpdate({
          ...driversToUpdate,
          name: e.currentTarget.value,
        });
        break;
    }
  };

  const getByIdFromDriverContext = async () => {
    try {
      const driversFromContext = await getById(id);
      setDriversToUpdate(driversFromContext);
    } catch (error) {
      console.error(error);
    }
  };

  const saveChanges = async () => {
    try {
      await editDrivers(driversToUpdate);
      setEditStatus("Changes has been registered!");
    } catch {
      setEditStatus("An error has occured..");
    }
  };

  return (
    <section className="container mb-5">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-4">
            <h6 className="card-title">Change drivers name</h6>
            <div>
              <label>Enter id:</label>
              <input
                placeholder="..."
                onChange={handleChange}
                name="id"
                value={id}
                type="text"
              />
              <button
                className="btn btn-danger mt-3"
                onClick={getByIdFromDriverContext}
                value="Get by id"
                type="button"
              >
                Bring by id
              </button>
            </div>

            <div className="mt-3">
              <label>Enter Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={driversToUpdate.name}
              />
            </div>
            <span className="text-danger">{editStatus}</span>

            <button
              className="btn btn-danger mt-3"
              onClick={saveChanges}
              type="button"
              value="Save changes"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditDrivers;
