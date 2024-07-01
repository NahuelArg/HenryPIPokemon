// En el archivo src/components/Filters.js

import React from 'react';

const Filters = ({ types, onFilterByType, onSort, onClearFilters }) => {
  return (
    <div className="filters">
      <div>
        <label>Filter by Type:</label>
        <select onChange={(e) => onFilterByType(e.target.value)}>
          <option value="">All</option>
          <option value="api">API Pokémon</option>
          <option value="created">Created Pokémon</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Sort:</label>
        <button onClick={() => onSort('asc')}>Sort A-Z</button>
        <button onClick={() => onSort('desc')}>Sort Z-A</button>
      </div>
      <button onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filters;
