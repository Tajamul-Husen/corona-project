import React from "react";

function Option({ country, onClick }) {
  return (
    <div className="option" onClick={onClick}>
      <p className="option-value">{country}</p>
    </div>
  );
}

export default Option;
