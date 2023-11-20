// imports the React library and the satData module
import React from "react";
import satData from "./satData";

// defines a function component: Buttons
const Buttons = ({ filterByType, setSat, displaySats }) => {
  // returns JSX (syntax extension for JavaScript) representing the component's UI (user interface)
  return (
    // Container for the buttons
    <div>
      {/* maps over the displaySats array to create buttons for each satellite type */}
      {displaySats.map((sat, id) => (
        // button for a specific satellite type, with an onClick event handler (function or method triggered by an event)
        <button key={id} onClick={() => filterByType(sat)}>
          {/* displays the satellite type in the button */}
          {sat} Orbit
        </button>
      ))}

      {/* button for displaying all satellite types */}
      <button onClick={() => setSat([])}>All Orbits</button>

      {/* button for filtering by Medium Orbit */}
      <button onClick={() => filterByType("Medium")}>Medium Orbit</button>

      {/* button for filtering by High Orbit */}
      <button onClick={() => filterByType("High")}>High Orbit</button>
    </div>
  );
};

// exports the Buttons component for this module
export default Buttons;

