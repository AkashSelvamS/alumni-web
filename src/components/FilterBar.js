import React from "react";

function FilterBar({ selectedDept, setSelectedDept, selectedBatch, setSelectedBatch }) {
  return (
    <div className="filter-bar">
      <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
        <option value="">All Departments</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="IT">IT</option>
        <option value="MECH">MECH</option>
      </select>
      <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
        <option value="">All Batches</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default FilterBar;
