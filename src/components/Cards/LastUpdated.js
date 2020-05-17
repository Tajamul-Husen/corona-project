import React from "react";
import "./LastUpdated.scss";

function LastUpdated({ lastDate }) {
  const time = lastDate && lastDate.split(/[T]/g)[0];
  return (
    <div className="last-updated">
      <p className="last-updated-text">
        Last Updated : <span className="last-updated-time">{time}</span>
      </p>
    </div>
  );
}

export default LastUpdated;
