import React from "react";

const DriverItem = ({ name, id, age, nationality, image }) => {
  // flag based on nationality
  const flags = {
    Australia: "aus.png",
    Belgium: "bel.png",
    China: "chn.png",
    Denmark: "den.jpg",
    England: "eng.jpg",
    Finland: "fin.png",
    Germany: "ger.jpg",
    Japan: "jpn.png",
    Mexico: "mex.jpg",
    Monaco: "mon.png",
    Spain: "spn.png",
    USA: "us.png",
    France: "frn.png",
    Canada: "can.jpg",
  };

  const flagImage = flags[nationality];
  const flagImagePath = `./src/content/${flagImage}`;

  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div className="p-3 border border-2 rounded position-relative shadow h-100">
        <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
          <h2>{id}</h2>
          <img
            src={flagImagePath}
            className="rounded-circle mb-3 border shadow border-dark"
            style={{ height: "1.5rem" }}
            alt=""
          />
        </div>

        <h3>{name}</h3>
        <p>{nationality}</p>
        <p>Age {age}</p>

        <img
          className="img-fluid"
          src={`http://localhost:5167/images/${image}`}
          alt=""
        />
      </div>
    </article>
  );
};

export default DriverItem;
