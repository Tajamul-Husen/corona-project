import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <div className="loader" style={{ display: "flex" }}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default Loader;
