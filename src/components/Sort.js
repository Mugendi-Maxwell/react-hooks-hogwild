import React from "react";

const Sort = ({ onSortChange }) => (
  <div>
    <label>Sort By:</label>
    <select onChange={(e) => onSortChange(e.target.value)}>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
  </div>
);

export default Sort;
