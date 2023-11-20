// Table.jsx
import React from "react";

function Table({ sat }) {
  return (
    <div>
      {/* Table Header */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type of Satellite</th>
            <th>Launch Date</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {sat.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;




