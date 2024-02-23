import React from "react";
import { CiSearch } from "react-icons/ci";

const Suggestions = ({suggestion}) => {
  return (
    <div>
      <li  className="px-3 py-1 hover:bg-gray-50">
        <CiSearch className="inline-block mr-2" />
        {suggestion}
      </li>
    </div>
  );
};

export default Suggestions;
