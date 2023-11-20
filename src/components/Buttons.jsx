// Buttons.jsx
import React from "react";
import satData from "./satData";

function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      {/* Update the first button */}
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}

      {/* Update the second button */}
      <button onClick={() => setSat(satData)}>All Orbits</button>

      {/* Update the third button */}
      <button onClick={() => filterByType("Medium")}>Medium Orbit</button>

      {/* Update the fourth button */}
      <button onClick={() => filterByType("High")}>High Orbit</button>
    </div>
  );
}


export default Buttons;







