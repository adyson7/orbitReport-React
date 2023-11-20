//imports the React library in order to create React components
import React from 'react';

// defines a functional component: Banner
function Banner() {
// returns JSX (syntax extension for JavaScript) representing the component's UI (user interface)
  return (
    // JSX code that creates the structure of the component
    <header>
      {/* heading element with text "Orbit Report" */}
      <h1>Orbit Report</h1>
      {/* paragraph element with instructions for the user */}
      <p>Click on the buttons to see the satellites in that orbit type</p>
    </header>
  );
}

// exports the Banner component for this module
export default Banner;

