import { ITeam } from "../../interfaces/ITeam";
import { FC } from "react";

const TeamItem: FC<ITeam> = ({ id, manufacturer, image, driver1, driver2 }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="p-3 border border-2 rounded position-relative shadow h-100 mb-2 mt-3">
        <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
          <h2>{id}</h2>
        </div>

        <h3>{manufacturer}</h3>
        <p>{driver1}</p>
        <p>{driver2}</p>

        <img
          className="img-fluid"
          src={`http://localhost:5167/images/${image}`} // The only images that I could download that were not AVIF.
          alt=""
        />
      </div>
    </div>
  );
};

export default TeamItem;
