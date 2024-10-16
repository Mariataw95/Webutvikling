import { useEffect, useState } from "react";
import RaceService from "../../services/RaceService";

// Get all races
const RaceItem = ({ id, winnerName, winnerTime, grandPrix, numberOfLaps }) => {
  return (
    <div className="container">
      <div className="p-3 border border-2 rounded position-relative shadow h-100">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vinner</th>
              <th>Tid</th>
              <th>Grand Prix</th>
              <th>Antall Runder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{winnerName}</td>
              <td>{winnerTime}</td>
              <td>{grandPrix}</td>
              <td>{numberOfLaps}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RaceItem;
