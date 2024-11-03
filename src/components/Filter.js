import React from "react";

const Filter = ({ onFilterChange }) => (
    <div>
      <label>
        Show Only Greased
        <input
          type="checkbox"
          onChange={(e) => onFilterChange(e.target.checked)}
        />
      </label>
    </div>
  );
  
  export default Filter;
  