import axios from "axios";

const DriverService = (() => {
  const DriversController = "http://localhost:5167/drivers";
  const imageUploadController = "http://localhost:5167/imageUpload";

  //Get all drivers
  const getAll = async () => {
    try {
      const result = await axios.get(DriversController);
      return result.data;
    } catch (err) {
      return [];
    }
  };

  //Get by id
  const getById = async (id) => {
    const result = await axios.get(`${DriversController}/${id}`);
    return result.data;
  };

  //Delete driver
  const deleteDrivers = async (id) => {
    try {
      const result = await axios.delete(`${DriversController}/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  };

  //New image upload
  const postDrivers = async (newDrivers, image) => {
    const result = await axios.post(DriversController, newDrivers);

    const formData = new FormData();
    formData.append("formFile", image);

    try {
      const uploadResult = await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      formData.delete("formFile");
    }
  };

  // Update drivers info
  const putDrivers = async (driversToUpdate) => {
    const result = await axios.put(DriversController, driversToUpdate);
  };

  return {
    getAll,
    postDrivers,
    getById,
    deleteDrivers,
    putDrivers,
  };
})();

export default DriverService;
