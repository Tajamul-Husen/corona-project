import React from "react";
import { Line, defaults } from "react-chartjs-2";
import { lineOptions } from "./options";
import "./LineChart.scss";
import { Loader } from "../Loader";

function LineChart({ dailyData, loader }) {
  defaults.global.defaultFontColor = "#fff";
  defaults.global.defaultFontSize = 13;
  defaults.global.defaultFontStyle = "bold";

  return loader ? (
    <Loader></Loader>
  ) : dailyData ? (
    <div className="canvas-container">
      <Line
        data={{
          labels: dailyData.TotalReportDate,
          datasets: [
            {
              data: dailyData.TotalConfirmed,
              label: "cases",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 2,
              pointRadius: 2,
            },
            {
              data: dailyData.TotalDeaths,
              label: "deaths",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
              pointRadius: 2,
            },
          ],
        }}
        width={400}
        height={350}
        options={lineOptions}
      ></Line>
    </div>
  ) : null;
}

export default LineChart;
