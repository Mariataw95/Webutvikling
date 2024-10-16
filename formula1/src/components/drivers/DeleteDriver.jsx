import { useState, useEffect, useContext } from "react";
import DriverService from "../../services/DriverService";
import { DriverContext } from "../../contexts/DriverContext";

// TODO - delete
const DeleteDrivers = () => {
  const { deleteDrivers } = useContext(DriverContext);
  const [id, setId] = useState();
  const [deleteStatus, setDeleteStatus] = useState("");

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleDelete = async () => {
    const result = await deleteDrivers(id);
    if (result === true) {
      setDeleteStatus("Driver has been deleted.");
    } else {
      setDeleteStatus("Something went wrong.");
    }
  };

  return (
    <section className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-4">
            <h6 className="card-title">Delete driver</h6>
            <input
              onChange={handleChange}
              placeholder="..."
              value={id}
              className="form-control  mb-2"
              name="id"
              type="text"
              style={{ width: "200px" }}
            />
            <span className="text-danger">{deleteStatus}</span>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete driver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteDrivers;
