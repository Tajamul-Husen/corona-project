import React from "react";
import "./Cards.scss";

function Card({ data }) {
  return (
    <div className="card">
      <h3 className="card-header">{data.title}</h3>
      <h3 className="card-data">{data.value.toLocaleString()}</h3>
    </div>
  );
}

function Cards({ dataCount }) {
  return (
    <div className="card-container">
      <Card
        data={(dataCount && dataCount.confirmed) || { title: "Confirmed", value: 0 }}
      ></Card>
      <Card data={(dataCount && dataCount.deaths) || { title: "Deaths", value: 0 }}></Card>
      <Card
        data={(dataCount && dataCount.recovered) || { title: "Recovered", value: 0 }}
      ></Card>
    </div>
  );
}

export default Cards;
