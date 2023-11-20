// imports the React library
import React from "react";

// defines a functional component: Table
const Table = ({ sat }) => {
  // returns JSX (syntax extension for JavaScript) representing the component's UI (user interface)
  return (
    // Table element to display the satellite data
    <table>
      <thead>
        {/* Table header row with column titles */}
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over the sat array to create rows for each satellite's data */}
        {sat.map((data, id) => {
          // Table row for a specific satellite, with a unique key
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//exports the Table component for this module
export default Table;




