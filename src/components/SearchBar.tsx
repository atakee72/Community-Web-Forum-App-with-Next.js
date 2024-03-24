"use client";

import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search topics..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded shadow"
    />
  );
};

export default SearchBar;
