import { useEffect, useState } from "react";
import DriverService from "../../services/DriverService";

const AddDrivers = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [saveStatus, setSaveStatus] = useState("");

  // Handling the change in input
  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "image":
        setImage(e.currentTarget.files[0]);
        break;

      case "nationality":
        setNationality(e.currentTarget.value);
        break;

      case "age":
        setAge(e.currentTarget.value);
        break;
    }
  };

  // Saving drrivers
  const saveDrivers = async () => {
    try {
      const newDrivers = {
        name: name,
        image: image.name,
        nationality: nationality,
        age: age,
      };

      await DriverService.postDrivers(newDrivers, image);
      setSaveStatus("Driver has been successfully saved.");
    } catch (error) {
      setSaveStatus("Something went wrong.. Try again!");
    }
  };

  return (
    <section className="mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="border border-secondary rounded p-4 box-bg-color">
              <h3 className="mb-3 text-center">Register Here</h3>

              <p className="text-center">
                You can now join the Formula 1 teams yourself! The only thing
                you need to do is register your name, type of car, and upload an
                image you want us to display on the screen. Good luck racing!
              </p>

              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name here"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>

                  <input
                    name="image"
                    type="file"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>

                  <input
                    name="age"
                    type="text"
                    className="form-control"
                    id="age"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="nationality" className="form-label">
                    Nationality
                  </label>

                  <input
                    name="nationality"
                    type="text"
                    className="form-control"
                    id="nationality"
                    placeholder="Enter nationality here"
                    onChange={handleChange}
                  />
                </div>
                <span className="text-danger">{saveStatus}</span>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={saveDrivers}
                  >
                    Save driver
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDrivers;
