// imports React and the useState hook from the React library
import React, { useState } from "react";

// importing other components created
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";

// imports satellite data
import satData from "./components/satData";

// defines the main App component
function App() {
  // using the useState(React function) hook to create state(current condition) for satellite data
  const [sat, setSat] = useState(satData);

  // creates an array of orbit values from the satellite data
  // new Set is an object within array, ensures no duplicates
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // function that filters satellites based on orbit type
  const filterByType = (currentType) => {
    // Filter satellite data based on the selected orbit type
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    // updates the state with the filtered satellite data
    setSat(filteredSats);
  };

  // returns the JSX representing the structure of the App component
  return (
    <>
      {/* renders the Banner component */}
      <Banner />
      {/* renders the Buttons component with necessary props (properties- React) */}
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      {/* renders the Table component with satellite data as props */}
      <Table sat={sat} />
    </>
  );
}

// exports the App component as the default export of this module
export default App;


