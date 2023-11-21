
import React, { useState } from "react";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import satData from "./components/satData";

function App() {
  // Create state variable and function to update it
  const [sat, setSat] = useState(satData);

  // Create variable to hold unique values of orbitType
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // Create function to filter satellites based on orbit type
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  // Return the JSX representing the structure of the App component
  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;


