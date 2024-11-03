import React, { useState } from "react";

function HogsTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="hog-tile" onClick={() => setShowDetails(!showDetails)}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          hideHog(hog.name);
        }}
      >
        Hide
      </button>
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogsTile;
