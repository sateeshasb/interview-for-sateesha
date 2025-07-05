    import React from 'react';

const FilterButtons = ({ onFilter }) => (
  <div className="filter-buttons">
    <button onClick={() => onFilter('all')}>All</button>
    <button onClick={() => onFilter('upcoming')}>Upcoming</button>
    <button onClick={() => onFilter('past')}>Past</button>
  </div>
);

export default FilterButtons;
