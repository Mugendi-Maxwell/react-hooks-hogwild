import React, { useState } from "react";
import Nav from "./Nav";
import HogsTile from "./HogsTile";
import Filter from "./Filter";
import Sort from "./Sort";
import AddHogForm from "./AddHog";
import hogsData from "../porkers_data";

function App() {
  const [onlyGreased, setOnlyGreased] = useState(false);
  const [sortCriterion, setSortCriterion] = useState("name");
  const [hogs, setHogs] = useState(hogsData);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const handleHideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  const addNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const filteredAndSortedHogs = hogs
    .filter((hog) => !onlyGreased || hog.greased)
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .sort((a, b) =>
      sortCriterion === "name"
        ? a.name.localeCompare(b.name)
        : a.weight - b.weight
    );

  return (
    <div className="App">
      <Nav />
      <Filter onFilterChange={setOnlyGreased} />
      <Sort onSortChange={setSortCriterion} />
      <AddHogForm addHog={addNewHog} />
      <div className="hog-tiles-container">
        {filteredAndSortedHogs.map((hog) => (
          <HogsTile key={hog.name} hog={hog} hideHog={handleHideHog} />
        ))}
      </div>
    </div>
  );
}

export default App;



